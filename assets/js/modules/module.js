
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
  $('.residents-holder').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  })
}

export function mobileMenu () {
  $('.menu-button').on('click', function() {
    $('.header-content').addClass('active-menu')
  });
  $('.close-menu').on('click', function() {
    $('.header-content').removeClass('active-menu')
  });
  $('.parent-menu > a').on('click', function() {
    $(this).next().slideToggle()
  })
}