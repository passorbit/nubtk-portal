/*! NUBTK visitor tracking: সব পেজে এই একটাই কোড (আগে ৮টা পেজে আলাদা কপি-পেস্ট ছিল) */
(function () {
  'use strict';
  if (window.NUBTKVisitors) return;

  var HEARTBEAT_MS = 60 * 1000;      // visible থাকলে প্রতি ১ মিনিটে "আমি আছি" জানানো
  function noop() {}
  function get(store, key) { try { return window[store].getItem(key); } catch (e) { return null; } }
  function put(store, key, val) { try { window[store].setItem(key, val); } catch (e) {} }

  // একই ব্রাউজারের জন্য একটাই ID (পেজ বদলালে নতুন ID হয় না, তাই ভূত জমে না)
  function visitorId() {
    var id = get('localStorage', 'nubtk_vid');
    if (!id || !/^[a-z0-9]{6,40}$/.test(id)) {
      id = (Date.now().toString(36) + Math.random().toString(36).slice(2, 10)).slice(0, 30);
      put('localStorage', 'nubtk_vid', id);
    }
    return id;
  }

  window.NUBTKVisitors = {
    track: function (pageName) {
      try {
        if (typeof firebase === 'undefined' || !firebase.database) return;
        if (get('localStorage', 'nubtk_no_track') === '1') return;   // admin নিজের টেস্ট গুনবে না

        var page = String(pageName || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 30) || 'unknown';
        var db = firebase.database();
        var TS = firebase.database.ServerValue.TIMESTAMP;

        // ১) পেজ ভিউ: একই ট্যাবে একই পেজ refresh করলে আবার গোনা হয় না
        var seenKey = 'nubtk_pv_' + page;
        if (!get('sessionStorage', seenKey)) {
          put('sessionStorage', seenKey, '1');
          var inc = function (v) { return (v || 0) + 1; };
          db.ref('visitors/total_visits').transaction(inc).catch(noop);
          db.ref('visitors/pages/' + page).transaction(inc).catch(noop);
        }

        // ২) অনলাইন: lastSeen সময় সহ লেখা হয়, তাই admin ভূত (পুরনো এন্ট্রি) চিনতে পারে
        var me = db.ref('visitors/online_users/' + visitorId());
        var beat = function () { me.update({ lastSeen: TS, page: page }).catch(noop); };

        db.ref('.info/connected').on('value', function (snap) {
          if (snap.val() !== true) return;
          // আগে "ডিসকানেক্ট হলে মোছো" নিবন্ধন, তারপর নিজেকে লেখা (উল্টো করলে ভূত থেকে যায়)
          me.onDisconnect().remove().then(function () {
            beat();
            // আগের পেজের disconnect এর মোছা দেরিতে পৌঁছালে নিজেকে আবার লিখে দেওয়া
            setTimeout(beat, 5000);
          }).catch(noop);
        });

        setInterval(function () { if (!document.hidden) beat(); }, HEARTBEAT_MS);
        document.addEventListener('visibilitychange', function () { if (!document.hidden) beat(); });
      } catch (e) { /* গণনা ব্যর্থ হলে পেজ যেন না ভাঙে */ }
    }
  };
})();
