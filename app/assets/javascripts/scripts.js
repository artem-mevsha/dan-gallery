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
      }
    }
  };

  var initScroll = function() {
    var scrollPane = $('.photo-container').jScrollPane({
      autoReinitialise: true,
    });
    var api = scrollPane.data('jsp');
    $('#main').bind('mousewheel', function (event, delta, deltaX, deltaY) {
        api.scrollByX(delta*-100);
        return false;
      }
    );
  };

  var resizeScroll = function() {
    var element = $('.photo-container').jScrollPane();
    var api = element.data('jsp');
    api.destroy();
    initScroll();
  };

  var destroyScroll = function() {
    var element = $('.photo-container').jScrollPane();
    var api = element.data('jsp');
    api.destroy();
  };

  resizePhoto();
  initScroll();

  $(window).on('resize', function() {
    if ($(window).width() > 768) {
      resizePhoto();
      resizeScroll();
    } else {
      destroyScroll();
      $('#main').unbind('mousewheel');
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
$(document).on('page:load', ready);