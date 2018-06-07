import "babel-polyfill";
import "./libs/slick";
import binder from "./libs/binder";
import {
    constants,
    accordion,
    slider,
    mobileMenu
} from "./modules/module";



binder({
    bounds: {
        "html": [constants, accordion, slider, mobileMenu],
    },
    runTests: true
});
