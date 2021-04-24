

// amikor a user rákattint a menu gombra:
document.querySelector('.menu-button').addEventListener('click', function() {
  console.log('clicked!');
  document.querySelector('body').classList.add('js-menu-open');
  document.querySelector('.close-menu').classList.remove('js-hidden');
  document.querySelector('header .main-menu').classList.add('js-show');
});

// amikor a user rákattint a close menu gombra:
document.querySelector('.close-menu').addEventListener('click', function() {
  document.querySelector('body').classList.remove('js-menu-open');
  document.querySelector('.close-menu').classList.add('js-hidden');
  document.querySelector('header .main-menu').classList.remove('js-show');
});

// amikor a user átméretezi a böngésző ablakot:
window.addEventListener('resize', function() {
  // megvizsgáljuk hogy nyitva van e a menü:
  if(document.querySelector('body').classList.contains('js-menu-open')) {
    //nyitva van a menu...
    if(window.innerWidth >= 650) {
      // ha a böngésző szélessége 650 fölé megy és nyitva van a menü
      // akkor a javascript automatikusan rákattint helyettünk a close gombra
      document.querySelector('.close-menu').click();
    }
  }
});


