import "babel-polyfill";
import "./libs/slick";
import "./libs/masonry";
import "./libs/jcf";
import "./libs/jcf.select";
import binder from "./libs/binder";
import {accordion} from "./modules/accordion";
import {customYTPlayer} from "./modules/customYTPlayer";
import {scrollAnimate} from "./modules/scrollAnimate";
import {popups} from "./modules/popups";
import {backToTop} from "./modules/backToTop";
import {googleMap} from "./modules/googleMap";
import {vueMap} from "./modules/vueMap";
import {
    constants,
    slider,
    mobileMenu,
    isDev,
    tabs,
    timeline,
    initMasonry,
    popupGallerySlider,
    scrollTo,
    fixedHeader,
    formSelect,
    playVideo,
    smoothScrollAmenities,
    adaParentMenu,
    // cancelBtn,
} from "./modules/module";


binder({
    bounds: {
        "html": [
            constants,
            slider,
            mobileMenu,
            isDev,
            tabs,
            timeline,
            initMasonry,
            popupGallerySlider,
            scrollTo,
            fixedHeader,
            googleMap,
            formSelect,
            vueMap,
        ],
        // ".cancel-btn": cancelBtn,
        ".parent-menu": adaParentMenu,
        ".anchor-nav": smoothScrollAmenities,
        "#intro-video": playVideo,
        ".accordion": accordion,
        ".custom-play-btn": customYTPlayer,
        ".animated": scrollAnimate,
        ".popups": popups,
        ".to-top": backToTop,
    },
    runTests: false
});
