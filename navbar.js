// কোন ফোল্ডারে আছি সেটা চেক করে অটোমেটিক লিংক ঠিক করার লজিক
const isInsidePagesFolder = window.location.pathname.includes('/pages/');
const homeLink = isInsidePagesFolder ? '../index.html' : 'index.html';
const pagesPrefix = isInsidePagesFolder ? '' : 'pages/';

const navbarHTML = `
  <style>
    /* Global Navbar CSS */
    .global-nav { 
      display: flex; justify-content: space-between; align-items: center; 
      padding: 20px 40px; 
      background: rgba(11, 29, 58, 0.95); 
      backdrop-filter: blur(10px); 
      /* Overlap ঠেকানোর ম্যাজিক: */
      position: sticky; top: 0; z-index: 1000; 
      border-bottom: 1px solid rgba(255,255,255,0.05); 
    }
    .global-nav .logo { font-size: 1.2rem; font-weight: 800; color: #C9A84C; text-decoration: none; }
    .global-nav .logo span { color: #fff; font-weight: 400; font-size: 1rem; }
    .global-nav .nav-links { display: flex; gap: 20px; }
    .global-nav .nav-links a { color: #f0f0f0; text-decoration: none; font-size: 0.9rem; font-weight: 500; padding: 8px 16px; border-radius: 8px; transition: 0.3s; }
    .global-nav .nav-links a:hover { background: rgba(201, 168, 76, 0.15); color: #C9A84C; }
    
    /* Active Link Styling */
    .global-nav .nav-links a.active { color: #C9A84C; font-weight: bold; }

    @media (max-width: 768px) {
      .global-nav { padding: 15px 20px; }
    }
  </style>

  <nav class="global-nav">
    <a href="${homeLink}" class="logo">NUBTK <span>Student Portal</span></a>
    <div class="nav-links">
      <a href="${homeLink}" class="nav-item">Home</a>
      <a href="${pagesPrefix}cover.html" class="nav-item">Cover Page</a>
      <a href="${pagesPrefix}routine.html" class="nav-item">Routine</a>
      <a href="${pagesPrefix}teachers.html" class="nav-item">Directory</a>
      <a href="${pagesPrefix}admin.html" class="nav-item">Admin</a>
    </div>
  </nav>
`;

// বডির একদম শুরুতে নেভিগেশন বারটি বসিয়ে দেওয়া
document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// কোন পেজে আছি সেটা বুঝে 'active' কালার দেওয়ার লজিক
setTimeout(() => {
  const currentUrl = window.location.href;
  const links = document.querySelectorAll('.nav-item');
  links.forEach(link => {
    if (currentUrl.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
}, 50);
