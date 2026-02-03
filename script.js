(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const toggleText = document.getElementById('themeToggleText');
  const year = document.getElementById('year');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (year) year.textContent = String(new Date().getFullYear());

  function setTheme(theme) {
    if (!toggleText) return;

    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggleText.textContent = 'Light';
    } else {
      root.removeAttribute('data-theme');
      toggleText.textContent = 'Dark';
    }
  }

  const saved = localStorage.getItem('cfe-theme');
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      localStorage.setItem('cfe-theme', next);
    });
  }

  const avatarImg = document.querySelector('.avatar__img');
  const avatarRoot = avatarImg ? avatarImg.closest('.avatar') : null;

  function markAvatarLoaded(loaded) {
    if (!avatarRoot) return;
    avatarRoot.classList.toggle('is-loaded', Boolean(loaded));
  }

  if (avatarImg) {
    avatarImg.addEventListener('load', function () {
      if (avatarImg.naturalWidth > 0) markAvatarLoaded(true);
    });
    avatarImg.addEventListener('error', function () {
      markAvatarLoaded(false);
    });

    if (avatarImg.complete) {
      markAvatarLoaded(avatarImg.naturalWidth > 0);
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navMenu.addEventListener('click', function (e) {
      const target = e.target;
      if (target && target.matches && target.matches('a[href^="#"]')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const reveals = Array.from(document.querySelectorAll('.reveal'));

  function applyDelay(el) {
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) el.style.transitionDelay = delay + 'ms';
  }

  reveals.forEach(applyDelay);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
})();
