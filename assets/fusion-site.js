(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('[data-header]');
  const progress = document.querySelector('.scroll-progress span');
  const revealItems = document.querySelectorAll('[data-reveal]');
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const aboutLink = navLinks.find((link) => link.getAttribute('href') === '#about');
  const compactLayout = window.matchMedia('(max-width: 900px)');

  const showProfileAndAbout = (behavior = 'smooth') => {
    window.history.replaceState(null, '', '#about');
    window.scrollTo({ top: 0, behavior });
  };

  aboutLink?.addEventListener('click', (event) => {
    if (!compactLayout.matches) return;
    event.preventDefault();
    showProfileAndAbout(reduceMotion ? 'auto' : 'smooth');
  });

  if (compactLayout.matches && window.location.hash === '#about') {
    window.requestAnimationFrame(() => showProfileAndAbout('auto'));
  }

  revealItems.forEach((item) => {
    const delay = Number(item.dataset.delay || 0);
    item.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, { rootMargin: '-24% 0px -64% 0px', threshold: [0, 0.15, 0.45] });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  let ticking = false;
  const updateOnScroll = () => {
    const scrollY = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? scrollY / scrollable : 0;

    header?.classList.toggle('is-scrolled', scrollY > 10);
    if (progress) progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateOnScroll);
  }, { passive: true });

  updateOnScroll();

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
