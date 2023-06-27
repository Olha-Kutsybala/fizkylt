(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    //   const scrollLockMethod = !isMenuOpen
    //     ? 'disableBodyScroll'
    //     : 'enableBodyScroll';
    //   // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // closeLink1.addEventListener('click', onClick);
  // closeLink2.addEventListener('click', onClick);
  // closeLink3.addEventListener('click', onClick);
  // closeLink4.addEventListener('click', onClick);
  // closeLink5.addEventListener('click', onClick);
  function onClick(evt) {
    if (mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
    }
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();
