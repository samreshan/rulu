
// Theme Toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Custom Cursor
const canvas = document.getElementById('trail');
const ctx = canvas.getContext('2d');
const cursorDot = document.querySelector('.cursor-dot');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let lastX = null;
let lastY = null;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // move dot
  cursorDot.style.transform = `translate(${x}px, ${y}px)`;

  // draw stroke
  if (lastX !== null && lastY !== null) {
    ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue("--accent-color") || "#fff";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  lastX = x;
  lastY = y;
});

// fading effect
function fadeTrail() {
  // dark mode background: #111, light mode: #fff
  const bg = getComputedStyle(document.body).backgroundColor || "rgba(255,255,255,1)";
  ctx.fillStyle = bg.replace("rgb", "rgba").replace(")", ",0.1)"); 
  ctx.fillRect(0, 0, width, height);
  requestAnimationFrame(fadeTrail);
}
fadeTrail();

// Parallax Effect
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const gridOverlay = document.querySelector('.grid-overlay');
    const heroContent = document.querySelector('.hero-content');
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Move grid slower than scroll
    // gridOverlay.style.transform = `translateY(${scrolled * 0.1}px)`;
    
    // Move hero content
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
    
    // Parallax for skill cards
    skillCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const speed = 0.1 * (index + 0.1);
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transform = `translateY(${(scrolled * speed)-150}px)`;
        }
    });
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Intersection Observer for project animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.project').forEach(project => {
    observer.observe(project);
});

// Case Study Entrance Animations
const caseStudyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            // Even index (0, 2...) = Left, Odd index (1, 3...) = Right
            if (index % 2 === 0) {
                entry.target.classList.add('enter-left');
            } else {
                entry.target.classList.add('enter-right');
            }
            caseStudyObserver.unobserve(entry.target); // Play once
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.case-study-card').forEach(card => {
    caseStudyObserver.observe(card);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .theme-toggle, .skill-card, .cta-button');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = 'var(--accent-color)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--accent-color)';
    });
});

// Performance optimization
let lastScrollY = window.scrollY;
let rafId = null;

function handleScroll() {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    
    rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;
        
        // Add any scroll-based animations here
        
        lastScrollY = currentScrollY;
    });
}

window.addEventListener('scroll', handleScroll, { passive: true });


// Modal Logic for Case Studies
const modal = document.getElementById('pdf-modal');
const closeBtn = document.querySelector('.close-modal');
const iframe = document.getElementById('pdf-frame');
const activeCards = document.querySelectorAll('.case-study-card.active-card');

function openModal(url) {
    if (url && modal && iframe) {
        iframe.src = url;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeModal() {
    if (modal && iframe) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        iframe.src = '';
        document.body.style.overflow = '';
    }
}

activeCards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        openModal(url);
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Close outside click
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});