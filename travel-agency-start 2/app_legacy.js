$(document).ready(function() {


  // LEGACY CODE!!!!!!!
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // $('.slider').bxSlider({
  //   pager: false,
  //   speed: 500,
  //   auto: true,
  //   pause: 3000,
  //   autoControls: false,
  //   touchEnabled: false,
  //   // https://github.com/stevenwanderski/bxslider-3/issues/234
  //   preventDefaultSwipeY:true,
  //   onSlideBefore: function() {
  //     if ( !$('.bx-clone').is(':visible') ) {
  //       $('.bx-clone').show();
  //     }
  //   }
  // });
  //
  $('.slider').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.datepicker').datepicker({ 
    autoclose: true,
    format: 'yyyy-mm-dd',
    startDate: '+0d',
    todayHighlight: true
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.popup-image').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });

  $('a[href^="#reserve"]').on('click', function (event) {
    const target = $(this.getAttribute('href')); // target will be #reserve
    // console.log(target);
    // console.log('my object:', target);
    if( target.length ) {
      // ez megakad??lyozza a villan??st
      event.preventDefault(); // https://api.jquery.com/event.preventdefault/ 
      // meg??ll??tunk minden anim??ci??t a bodyn ??s a html-en (ha van)
      $('html, body').stop().animate({

        // a scrollTop az hogy mit anim??lunk a target.offset().top pedig az ??rt??k (a target t??vols??ga a top-t??l)
        // http://api.jquery.com/offset/     csak a top kell azert .top (t??bb param??ter is lek??rdezhet?? lenne)
        scrollTop: target.offset().top

        // https://www.w3schools.com/jsref/prop_element_scrolltop.asp
      }, 1000);
    }
  });

});





