export function popupGallery(clickCurrent) {
  let slider = $(".popup-gallery-slider");
  slider.not('.slick-initialized').slick({
    infinite: false,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: false,
    useCss: false,
    mobileFirst: true,
    initialSlide: clickCurrent,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          centerPadding: "150px",
        }
      },
      {
        breakpoint: 1279,
        settings: {
          infinite: false,
          centerPadding: "255px",
        }
      }
    ]
  });
}