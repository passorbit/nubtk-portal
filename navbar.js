// কোন ফোল্ডারে আছি সেটা চেক করে অটোমেটিক লিংক ঠিক করার লজিক
const isInsidePagesFolder = window.location.pathname.includes('/pages/');
const homeLink = isInsidePagesFolder ? '../index.html' : 'index.html';
const pagesPrefix = isInsidePagesFolder ? '' : 'pages/';

const navbarHTML = `
<style>
  /* DROPDOWN MENU STYLES */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-btn {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: inherit;
  }
  
 /* TOOLS DROPDOWN CONTAINER */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  /* ড্রপডাউনটি যেন বাটন থেকে বিচ্ছিন্ন না হয়, তাই বাটন ও মেনুর গ্যাপ জিরো করে দেওয়া */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--card-bg, #0B1D3A);
    min-width: 220px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    border: 1px solid var(--border, #2A3B5A);
    border-radius: 10px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 15px; /* এই প্যাডিংটি বাটন ও মেনুর গ্যাপ ফিলাপ করবে */
    margin-top: 5px;   /* খুব সামান্য মার্জিন */
  }

  /* মাউস হোভার এনিমেশন */
  .dropdown:hover .dropdown-content {
    display: block;
    animation: fadeUp 0.2s ease;
  }
  
  .dropdown-content::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: var(--card-bg, #0B1D3A);
    border-left: 1px solid var(--border, #2A3B5A);
    border-top: 1px solid var(--border, #2A3B5A);
  }

  .dropdown-content a {
    color: #fff;
    padding: 12px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.2s ease;
    position: relative;
    z-index: 2;
  }
  
  .dropdown-content a:last-child {
    border-bottom: none;
  }
  
  .dropdown-content a:hover, .dropdown-content a.active {
    background-color: rgba(201, 168, 76, 0.1);
    color: var(--gold, #C9A84C);
    padding-left: 25px;
  }

  /* DESKTOP HOVER LOGIC */
  @media (min-width: 769px) {
    .dropdown:hover .dropdown-content {
      display: block;
      animation: fadeUp 0.3s ease;
    }
  }

  /* MOBILE TOGGLE LOGIC */
  @media (max-width: 768px) {
    .dropdown-content {
      position: static;
      box-shadow: none;
      border: none;
      background: rgba(0, 0, 0, 0.15);
      margin-top: 10px;
      border-radius: 8px;
      display: none;
      transform: none;
      width: 100%;
    }
    .dropdown-content::before, .dropdown-content::after {
      display: none;
    }
    .dropdown.active .dropdown-content {
      display: block;
      animation: fadeUp 0.3s ease;
    }
    .dropdown-btn {
      width: 100%;
      justify-content: space-between;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .dropdown-content a {
      padding: 12px 15px;
    }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translate(-50%, 10px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
  
  @media (max-width: 768px) {
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  }
</style>

<nav class="navbar">
  <div class="nav-inner">
    <div class="nav-brand">
      <span class="brand-short">NUBTK</span>
      <span class="brand-sep">·</span>
      <span class="brand-full">Student Portal</span>
    </div>
    
    <div class="nav-links">
      <a href="${homeLink}" class="nav-link">Home</a>
      
      <!-- SMART TOOLS DROPDOWN -->
      <div class="dropdown" id="toolsDropdown" 
           onmouseover="showDropdown()" 
           onmouseout="hideDropdown()">
           
        <button class="nav-link dropdown-btn" onclick="toggleDropdown(event)">
          Tools <span style="font-size: 0.7rem; margin-top: 3px;">▼</span>
        </button>
        
        <div class="dropdown-content" id="dropdownContent">
          <a href="${pagesPrefix}cover.html">📄 Cover Page</a>
          <a href="${pagesPrefix}routine.html">🗓️ Routine</a>
          <a href="${pagesPrefix}free-time.html">🔍 Free Class Finder</a>
          <a href="${pagesPrefix}index-maker.html">📋 Index Maker</a>
        </div>
      </div>

      <a href="${pagesPrefix}teachers.html" class="nav-link">Teacher's Directory</a>
      <a href="${pagesPrefix}games.html" class="nav-link">Games</a>
      <a href="${pagesPrefix}login.html" class="nav-link nav-admin" id="nav-login-btn">🔐 Student Login</a>
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

window.toggleDropdown = function(e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    document.getElementById('toolsDropdown').classList.toggle('active');
  }
};

// MOUSE DROPDOWN
window.showDropdown = function() {
  if (window.innerWidth > 768) {
    document.getElementById('dropdownContent').style.display = 'block';
  }
};

// মাউস সরিয়ে নিলে ড্রপডাউন হাইড করবে (একটি ছোট্ট Delay বা সময় দিয়ে)
let hideTimeout;
window.hideDropdown = function() {
  if (window.innerWidth > 768) {
    hideTimeout = setTimeout(() => {
      document.getElementById('dropdownContent').style.display = 'none';
    }, 300); // ৩০০ মিলিসেকেন্ড সময় পাবে মাউসটি মেনুতে নেওয়ার জন্য
  }
};

// মেনুর ওপর মাউস থাকলে হাইড হওয়া বন্ধ করবে
document.getElementById('dropdownContent')?.addEventListener('mouseover', () => {
  clearTimeout(hideTimeout);
});

setTimeout(() => {
  const currentUrl = window.location.href;
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return; 
    
    if (href === '../index.html' || href === 'index.html') {
      if (currentUrl.endsWith('/') || currentUrl.endsWith('index.html')) {
        link.classList.add('active');
      }
    } 
    else if (currentUrl.includes(href.replace('../', '').replace('pages/', ''))) {
      link.classList.add('active');
      
      const parentDropdownBtn = link.closest('.dropdown')?.querySelector('.dropdown-btn');
      if (parentDropdownBtn) {
        parentDropdownBtn.classList.add('active');
      }
    }
  });

  // ⚡ ম্যাজিক: ফায়ারবেস চেক করবে ইউজার লগইন করা কি না
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged((user) => {
      const loginBtn = document.getElementById('nav-login-btn');
      if (loginBtn) {
        if (user) {
          loginBtn.innerHTML = "👨‍🎓 Profile";
          loginBtn.href = `${pagesPrefix}profile.html`;
        } else {
          loginBtn.innerHTML = "🔐 Login";
          loginBtn.href = `${pagesPrefix}login.html`;
        }
      }
    });
  }
}, 50);
