export function backToTop() {
  $(".footer_ .to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("body").offset().top
    }, 700);
  });
}