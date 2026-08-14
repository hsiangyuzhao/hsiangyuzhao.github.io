(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => root.classList.add('studio-ready'));
  });

  if (reduceMotion) return;

  let scrollFrame = 0;

  const paintScroll = () => {
    const progress = Math.min(window.scrollY, 900);
    const photoShift = Math.min(progress * 0.026, 22);
    const markShift = Math.min(progress * 0.042, 34);

    root.style.setProperty('--studio-photo-shift', `${photoShift.toFixed(1)}px`);
    root.style.setProperty('--studio-mark-shift', `${markShift.toFixed(1)}px`);
    scrollFrame = 0;
  };

  window.addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(paintScroll);
  }, { passive: true });

  paintScroll();
})();
