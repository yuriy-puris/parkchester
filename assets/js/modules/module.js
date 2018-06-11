// these properties will be available from anywhere via this.property
export const constants = {
    isTouch: "ontouchstart" in window ? function() {document.body.classList.add("touch"); return true;}() : false,
    body: $("body")
};

export function accordion() {
  const $questionHead = $('.faq-title');
  $questionHead.on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    if ($this.hasClass('active')) {
      $this.removeClass('active').parent().next().slideUp(300);
    } else {
      $questionHead.removeClass('active').parent().next().slideUp(300);
      $this.addClass('active').parent().next().slideDown(300);
    }
  });
}

export function slider() {
  $('.residents-holder, .gallery-apartments').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
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
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
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
    $(this).toggleClass('active');
    $(this).next().slideToggle()
  })
}

export function isDev() {
  return !$("html").hasClass("no-dev");
}

export function noDev() {
  if ((typeof window.orientation !== "undefined") ||
    (navigator.userAgent.indexOf("IEMobile") !== -1)) {
    $(".no-dev").removeClass("no-dev");
  }
}

export function tabs() {
  $('.tab-nav a').on('click', function(event) {
    $(this).parent().addClass("active").siblings(".tab-nav-item").removeClass("active");
    let attr = $(this).attr('href');
    $(attr).addClass('active').siblings(".tab-content-item").removeClass("active");
    event.preventDefault();
  })
}

export function gallery() {
  $('.gallery-holder').masonry({
    itemSelector: '.item',
    columnWidth: 370,
    gutterWidth: 30
  });
}