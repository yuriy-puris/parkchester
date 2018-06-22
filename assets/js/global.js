import "babel-polyfill";
import "./libs/slick";
import "./libs/masonry";
import "./libs/jcf";
import "./libs/jcf.select";
import binder from "./libs/binder";
import { accordion } from "./modules/accordion";
import { customYTPlayer } from "./modules/customYTPlayer";
import { scrollAnimate } from "./modules/scrollAnimate";
import { popups } from "./modules/popups";
import { backToTop } from "./modules/backToTop";
import { contactUsMap } from "./modules/contactUsMap";
import { googleMap } from "./modules/googleMap";
import { vueMap } from "./modules/vueMap";
import {
    constants,
    slider,
    mobileMenu,
    isDev,
    noDev,
    tabs,
    timeline,
    initMasonry,
    popupGallerySlider,
    photoGallerySlider,
    scrollTo,
    fixedHeader,
    formSelect,
} from "./modules/module";



binder({
    bounds: {
        "html": [
          constants,
          slider,
          mobileMenu,
          isDev,
          noDev,
          tabs,
          timeline,
          initMasonry,
          popupGallerySlider,
          photoGallerySlider,
          scrollTo,
          fixedHeader,
          contactUsMap,
          googleMap,
          formSelect,
          vueMap
        ],
        ".accordion": accordion,
        ".custom-play-btn": customYTPlayer,
        ".animated": scrollAnimate,
        ".popups": popups,
        ".to-top": backToTop,
    },
    runTests: false
});
