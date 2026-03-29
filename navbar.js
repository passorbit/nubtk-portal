// কোন ফোল্ডারে আছি সেটা চেক করে অটোমেটিক লিংক ঠিক করার লজিক
const isInsidePagesFolder = window.location.pathname.includes('/pages/');
const homeLink = isInsidePagesFolder ? '../index.html' : 'index.html';
const pagesPrefix = isInsidePagesFolder ? '' : 'pages/';

// আপনার হুবহু অরিজিনাল HTML স্ট্রাকচার
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
      <a href="${pagesPrefix}admin.html" class="nav-link nav-admin">Admin</a>
      <a href="${pagesPrefix}index-maker.html" class="nav-link">Index Maker</a>
    </div>
    
    <button class="nav-hamburger" onclick="toggleNav()">&#9776;</button>
  </div>
</nav>
`;

// বডির একদম শুরুতে নেভিগেশন বারটি বসিয়ে দেওয়া
document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// মোবাইল মেনু টগল করার গ্লোবাল ফাংশন
window.toggleNav = function() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
};

// কোন পেজে আছি সেটা বুঝে 'active' ক্লাস দেওয়ার লজিক
setTimeout(() => {
  const currentUrl = window.location.href;
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Home পেজের জন্য স্পেশাল চেক
    if (href === '../index.html' || href === 'index.html') {
      if (currentUrl.endsWith('/') || currentUrl.endsWith('index.html')) {
        link.classList.add('active');
      }
    } 
    // অন্যান্য পেজের জন্য চেক
    else if (currentUrl.includes(href.replace('../', '').replace('pages/', ''))) {
      link.classList.add('active');
    }
  });
}, 50);
