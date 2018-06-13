export function accordion() {
    const accordion = $(".accordion");
    const accordionItem = accordion.find(".accordion-item");
    accordionItem.on("click", function () {
        let $this = $(this);
        if (window.innerWidth < 768) {
            setTimeout(function () {
                $("html, body").animate({
                    scrollTop: $this.offset().top - $(".header").height()
                }, 700);
            }, 500);
        }
        $this.toggleClass("expanded").siblings().removeClass("expanded");
    });
}