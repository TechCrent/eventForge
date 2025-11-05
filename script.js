
const menuBtn = document.querySelector('.menu'); // your button that opens the menu
const menuOverlay = document.querySelector('.menu-list');

  menuBtn.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Optional: close overlay when clicking outside
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open')
    }
  });
