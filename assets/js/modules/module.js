// these properties will be available from anywhere via this.property
export const constants = {
  isDev: "ontouchstart" in window
      ? (() => {
        $("html").removeClass("no-dev");
        return true;
      })()
      : false,
  $body: $("body"),
  $window: $(window),
  $document: $(document),
};


export function slider() {
  $('.residents-holder, .gallery-apartments').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.timeline-slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.visual-bedroom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: false,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });
  $('.large-sync').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small-sync'
  });
  $('.small-sync').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.large-sync',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
  });
    //property-animities
  $('.large-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small-slider',
    infinite: true,
    centerMode: true,
    variableWidth: true
  });
  $('.small-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.large-slider',
    dots: false,
    focusOnSelect: true,
    mobileFirst: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          vertical: true,
          verticalSwiping: true,
          adaptiveHeight: true,
        }
      }
    ]
  });
  //photo gallery
  $('.photo-gallery').slick({
    appendArrows: $('.custom-controls'),
    appendDots: $('.custom-controls'),
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          dots: true,
          slidesToScroll: 9,
          slidesToShow: 9
        }
      }
    ]
  });
  //timeline slide
  $('.timeline-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide)
    $('.part[data-history='+nextSlide+']').click()
  });
}

export function timeline() {
  $('.chapter').on('click', function(e) {
    if (!$(this).hasClass('active')) {
      $('.chapter.active').removeClass('active');
      $(this).addClass('active');
    }
    $(this).removeClass('past');
    $(this).prevAll().addClass('past');
    $(this).nextAll().each(function() {
      $(this).removeClass('active').removeClass('past');
      $(this).find('.active, .past').removeClass('active').removeClass('past');
    });
  });
  
  $('.part').on('click', function(e) {
    let $this = $(this),
        $attr = $this.data('history');
        $('.timeline-slider .slick-dots li').eq($attr).children().click();

    if (!$this.hasClass('active')) {
      $('.part.active').removeClass('active');
      $this.addClass('active');
      $this.parent().trigger('click');
      
      $this.removeClass('past');
      $this.prevAll().addClass('past');
      $this.nextAll().removeClass('past');
    }
  });

}

export function mobileMenu () {
  $('.menu-button').on('click', function() {
    $('.header-content').addClass('active-menu')
  });
  $('.close-menu').on('click', function() {
    $('.header-content').removeClass('active-menu')
  });
  $('.parent-menu > a').on('click', function() {
    $(this).toggleClass('active').next().slideToggle()
  })
}

export function isDev() {
  return !$("html").hasClass("no-dev");
}

export function tabs() {
  $('.tab-nav a').on('click', function(event) {
    $(this).parent().addClass("active").siblings(".tab-nav-item").removeClass("active");
    let attr = $(this).attr('href');
    $(attr).addClass('active').siblings(".tab-content-item").removeClass("active");
    event.preventDefault();
  })
}

export function gallery () {
  $('.gallery-holder').masonry({
    itemSelector: '.item',
    columnWidth: 370,
    gutter: 30
  });
}

export function photoGallery() {
  $('.photo-gallery .slick-track').masonry({
    itemSelector: '.item',
    columnWidth: 370,
    gutter: 20
  });
}

export function checkViewPort () {
  let e = window,
      propWidth = 'inner';
  if( !('innerWidth' in window) ) {
    propWidth = 'client';
    e = document.documentElement || document.body
  }
  return {
    width: e[propWidth + 'Width'],
    height: e[propWidth + 'Height']
  }
}

export function initMasonry () {
  $(window).on('load resize', function () {
    let wWidth = checkViewPort().width;
    if( wWidth >= 1280 ) {
      setTimeout(() => {
        photoGallery()
      }, 1000)
    }
  })
}