export function popupGallery(finalCurrent) {
  let slider = $(".popup-gallery-slider");
  slider.not(".slick-initialized").slick({
    infinite: false,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    variableWidth: false,
    useCss: false,
    mobileFirst: true,
    initialSlide: finalCurrent,
    appendArrows: $(".popup-controls"),
    focusOnSelect: true,
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
      },
      {
        breakpoint: 1439,
        settings: {
          variableWidth: true,
        }
      }
    ]
  });
}
