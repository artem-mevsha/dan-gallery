var ready = function() {
    // do stuff here.


  /**
   * Navigation hamburget
   */
  $('.button-collapse').on('click', function() {
    $('#menu').slideToggle('open');
  });

  /**
   * Photo feet to screen height
   */
  var resizePhoto = function() {
    var $photos = $('.photo-container img');
    if ($photos.length) {
      var $body   = $('#main'),
        $header = $('#header'),
        $footer = $('#footer');
      var bodyPadding = parseInt($body.css('padding-top')) + parseInt($body.css('padding-top'));
      var headerHeight = $header.height() + parseInt($header.css('padding-top')) + parseInt($header.css('padding-bottom'));
      var footerHeight = $footer.height() + parseInt($footer.css('padding-top')) + parseInt($footer.css('padding-bottom'));
      var photoHeight = $(window).height() - headerHeight - footerHeight - bodyPadding;
      $photos.height(photoHeight);
      if ($(window).width() > 768) {
        $('.photo-container').height(photoHeight);
      } else {
        $('.photo-container').css('height', 'auto');
        $photos.css('height', 'auto');
      }
    }
  };

  var initSlick = function($container) {
    $container.slick({
      dots: true,
      speed: 300,
      arrows: false,
      slidesToShow: 1,
      centerMode: true,
      lazyLoad: 'ondemand',
      variableWidth: true
    });
  };


  if ($(window).width() > 768) {
    resizePhoto();
    initSlick($('.photo-container'));
  }

  $(window).on('resize', function() {
    resizePhoto();
    if ($(window).width() > 768) {
      initSlick($('.photo-container'));
    } else {
      $('.photo-container').slick('unslick');
    }
  });


  $('.photo-container').magnificPopup({
    delegate: 'a',
    // type: 'ajax',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    closeMarkup: '<button title="Закрити (Esc)" type="button" class="mfp-close">×</button>',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1],
      tCounter: '<span class="mfp-counter">%curr% із %total%</span>'
    },
    image: {
      tError: '<a href="%url%">Зображення #%curr%</a> не вдалось завантажити.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small><a href="' + item.el.attr('href') + '" target="_blank">Відкрити орігинал</a></small>';
      }
    }
  });


  /**
   * Hide preloader after loading
   */
  $('body').removeClass('loading');
  $('#preloader').fadeOut();

};

$(document).ready(ready);