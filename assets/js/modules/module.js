import "babel-polyfill";
import { popupGallery } from "./popupGallery";
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
  $('.residents-holder').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.custom-controls'),
    appendDots: $('.custom-controls'),
  });
  $('.gallery-features').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.features-controls'),
    appendDots: $('.features-controls'),
  });
  $('.gallery-community').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.community-controls'),
    appendDots: $('.community-controls'),
  });
  $('.gallery-contemporary').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.contemporary-controls'),
    appendDots: $('.contemporary-controls'),
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
    infinite: false,
    responsive: [
      {
        breakpoint: 568,
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
  $('.large-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small-slider',
    fade: true,
  });
  $('.small-slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    infinite: true,
    asNavFor: '.large-slider',
    prevArrow: '<button type="button" class="slick-prev">Up</button>',
    nextArrow: '<button type="button" class="slick-next">Down</button>',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          vertical: false,
          verticalSwiping: false,
          variableWidth: true,
          infinite: true,
          centerMode: true,
          slidesToScroll: 1,
          slidesToShow: 3,
          prevArrow: '<button type="button" class="slick-prev">Prev</button>',
          nextArrow: '<button type="button" class="slick-next">Next</button>'
        }
      }
    ]
  });
  //timeline slide
  $('.timeline-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.part[data-history='+nextSlide+']').click()
  });

}

export function popupGallerySlider() {
  let clickCurrent,
      clickCurrentParent,
      finalCurrent;
  const item = $('.photo-gallery .item'),
      wrapperPopup = $('.popups'),
      galleryPopup = $('.gallery-popup'),
      galleryPopupWrapper = $('.popup-gallery-slider');

  item.on('click', function() {
    let wWidth = checkViewPort().width;
    clickCurrent = $(this).index();
    clickCurrentParent = $(this).closest('.wrap-items').index();
    finalCurrent = 9 * clickCurrentParent + clickCurrent;
    item.clone().attr('style', '').appendTo(galleryPopupWrapper);
    wrapperPopup.addClass('active');
    galleryPopup.addClass('opened');
    if( wWidth >= 1280 ) {
      popupGallery(finalCurrent);
    } else {
      popupGallery(clickCurrent);
    }
  });
  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    let wWidth = checkViewPort().width;
    let popupActiveIdx = galleryPopupWrapper.find(".slick-current").index();
    if( wWidth < 1280 ) {
      $(".photo-gallery-controls .slick-dots").find("li").eq(popupActiveIdx).click();
    } else {
      let ceilIdx = Math.ceil(popupActiveIdx / 9);
      let photoGalleryIdx;
      if( popupActiveIdx / 9 < ceilIdx ) {
        photoGalleryIdx = ceilIdx - 1
      } else if ( popupActiveIdx / 9 == ceilIdx ) {
        photoGalleryIdx = ceilIdx
      }
      $(".photo-gallery-controls .slick-dots").find("li").eq(photoGalleryIdx).click();
    }
    galleryPopupWrapper.slick('unslick');
    galleryPopupWrapper.empty();
  });
}
//photo gallery
export function photoGallerySlider() {
  $('.photo-gallery').slick({
    appendArrows: $('.custom-controls'),
    appendDots: $('.custom-controls'),
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    centerMode: false,
    variableWidth: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          variableWidth: false,
          infinite: false,
          centerMode: false,
          dots: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }
    ]
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
    columnWidth: '.item-size',
    gutter: 30,
    percentPosition: true
  });
}

export function wrapperGallery() {
  // $(".photo-gallery").slick('unslick');
  let context = $('.photo-gallery'),
      wrapperCounter = 0;
  while( context.children('div:not(.wrap-items)' ).length) {
    context.children('div:not(.wrap-items):lt(9)').wrapAll('<div class="wrap-items">');
    wrapperCounter++;
  }
  if( wrapperCounter === context.children('.wrap-items' ).length ) {
    photoGallerySlider()
  }
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
  $(window).on('load', function () {
    let wWidth = checkViewPort().width;
    let resizeId;
    if( wWidth >= 1280 ) {
      setTimeout(() => {
        wrapperGallery();
      }, 100)
    } else {
      // setTimeout(() => {
      //   photoGallerySlider();
      // }, 100)
      clearTimeout(resizeId);
      resizeId = setTimeout(photoGallerySlider, 500);
    }
  })
}

export function scrollTo() {
  if ( $('.scroll-to').length ) {
    const btn = $('.scroll-to'),
        parentBtn = $('.scroll-to').parent(),
        parentBtnOffsetTop = parentBtn.next().offset().top,
        headerHeight = $('.header').outerHeight();
    $('.scroll-to').on('click', function() {
      $('html, body').animate({
        scrollTop: parentBtnOffsetTop - headerHeight
      }, 1000)
    })
  }
}

export function fixedHeader() {
  const header = $('.header'),
        headerScrollTop = header.scrollTop();
  $(window).on('load scroll', () => {
    $(window).scrollTop() > headerScrollTop ? header.addClass('fixed') : header.removeClass('fixed')
  })
}

export function formSelect() {
    jcf.setOptions('Select', {
      wrapNativeOnMobile: false,
      wrapNative: false,
      maxVisibleItems: 7
    });
    jcf.replaceAll();
}
