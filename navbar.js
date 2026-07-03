// কোন ফোল্ডারে আছি সেটা চেক করে অটোমেটিক লিংক ঠিক করার লজিক
const isInsidePagesFolder = window.location.pathname.includes('/pages/');
const homeLink = isInsidePagesFolder ? '../index.html' : 'index.html';
const pagesPrefix = isInsidePagesFolder ? '' : 'pages/';

const navbarHTML = `
<nav class="navbar">
  <div class="nav-inner">
    <div class="nav-brand">
      <span class="brand-short">NUBTK</span>
      <span class="brand-sep">·</span>
      <span class="brand-full">Student Portal</span>
    </div>
    
    <div class="nav-links">
      <a href="${homeLink}" class="nav-link">Home</a>
      <a href="${pagesPrefix}cover.html" class="nav-link">Cover Page</a>
      <a href="${pagesPrefix}routine.html" class="nav-link">Routine</a>
      <a href="${pagesPrefix}teachers.html" class="nav-link">Teacher's Directory</a>
      <a href="${pagesPrefix}index-maker.html" class="nav-link">Index Maker</a>
      <a href="${pagesPrefix}games.html" class="nav-link">Games</a>
      <a href="${pagesPrefix}login.html" class="nav-link nav-admin" id="nav-login-btn">🔐 Login</a>
    </div>
    
    <button class="nav-hamburger" onclick="toggleNav()">&#9776;</button>
  </div>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);

window.toggleNav = function() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
};

setTimeout(() => {
  const currentUrl = window.location.href;
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === '../index.html' || href === 'index.html') {
      if (currentUrl.endsWith('/') || currentUrl.endsWith('index.html')) {
        link.classList.add('active');
      }
    } 
    else if (currentUrl.includes(href.replace('../', '').replace('pages/', ''))) {
      link.classList.add('active');
    }
  });

  // ⚡ ম্যাজিক: ফায়ারবেস চেক করবে ইউজার লগইন করা কি না
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged((user) => {
      const loginBtn = document.getElementById('nav-login-btn');
      if (loginBtn) {
        if (user) {
          // লগইন করা থাকলে Profile পেজে নিয়ে যাবে
          loginBtn.innerHTML = "👨‍🎓 Profile";
          loginBtn.href = `${pagesPrefix}profile.html`;
        } else {
          // লগইন না থাকলে Login পেজে নিয়ে যাবে
          loginBtn.innerHTML = "🔐 Login";
          loginBtn.href = `${pagesPrefix}login.html`;
        }
      }
    });
  }
}, 50);
