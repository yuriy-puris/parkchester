export function popups() {
  const mainWrap = this.$body;
  const popupWrap = $(".popups");
  const $window = this.$window;
  // let scrolled = $window.scrollTop();
  let popup;
  $(".popup-link").on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    // let scrolled = $window.scrollTop();
    mainWrap.addClass("no-scroll");
    popupWrap.addClass("active");
    popup = (!$this.attr("href")) ? $this.find("a").attr("href") : $this.attr("href");
    $(popup).addClass("opened");
    $(popup).find(".popup-close").focus();
    if ($(popup).hasClass("video-popup")) {
      $(".video-popup.opened iframe")[0].contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + "playVideo" + "\",\"args\":\"\"}", "*");
    };
  });
  this.$document.on("click", ".popup-close", function () {
    setTimeout(closePopup, 200);
  });
  // $(".popups").on("click", function (event) {
  //   if ($(event.target).hasClass("video-popup")) {
  //     if (!$(event.target).closest(".popup-content").length) {
  //       setTimeout(closePopup, 200);
  //     }
  //   } else {
  //     if (!$(event.target).closest(".popup").length) {
  //       setTimeout(closePopup, 200);
  //     }
  //   }
  // });

  function closePopup() {
    let scrolled = $(window).scrollTop();
    if ($(".popup.opened").hasClass("video-popup")) {
      $(".video-popup.opened iframe")[0].contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + "stopVideo" + "\",\"args\":\"\"}", "*");
    };
    $(".popup").removeClass("opened");
    popupWrap.removeClass("active");
    mainWrap.removeClass("no-scroll");
    window.location.hash = "";
    $(".popup-link").parents("li").removeClass("current-menu-item");
    $(window).scrollTop(scrolled);
    $(`a[href="${popup}]"`).focus();
  }
}