import "babel-polyfill";
import "./libs/slick";
import "./libs/masonry";
import binder from "./libs/binder";
import {
    constants,
    accordion,
    slider,
    mobileMenu,
    isDev,
    noDev,
    tabs,
    gallery
} from "./modules/module";



binder({
    bounds: {
        "html": [
          constants,
          accordion,
          slider,
          mobileMenu,
          isDev,
          noDev,
          tabs,
          gallery
        ],
    },
    runTests: true
});
