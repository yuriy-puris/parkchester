export function scrollAnimate() {
    const elements = $(".animated");
    const addHeight = $(window).height() * .75;
    let scrolled = $(window).scrollTop();

    if (!this.isDev) {
        for (let i = 0; i < elements.length; i++) {
            let elementPos = $(elements[i]).offset().top;
            if (elementPos < (scrolled + addHeight)) {
                $(elements[i]).addClass("animation");
            }
        }
        $(window).on("scroll", function () {
            scrolled = $(window).scrollTop();
            for (let i = 0; i < elements.length; i++) {
                let elementPos = $(elements[i]).offset().top;
                if (elementPos < (scrolled + addHeight)) {
                    $(elements[i]).addClass("animation");
                }
            }
        });
    }
}