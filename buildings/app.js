

document.querySelector('.menu-button').addEventListener('click', function() {
   
  console.log('clicked!');
  document.querySelector('body').classList.add('js-menu-open');
  document.querySelector('.close-menu').classList.remove('js-hidden');

});

document.querySelector('.close-menu').addEventListener('click', function() {
   
  document.querySelector('body').classList.remove('js-menu-open');
  document.querySelector('.close-menu').classList.add('js-hidden');

});
