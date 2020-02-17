import "bootstrap";

import { preloader } from "../components/preloader";
import { titleEffect } from "../components/title_effect";
import { prettyUnderline } from "../components/pretty_underline";
import { functionDisplay } from "../components/display_image";
import { functionColorChange } from "../components/color_change";
import { navbarUnderline } from "../components/navbar_underline";
import { backgroundColorChange } from "../components/navbar_background_color";
import { smoothScroll } from "../components/smooth_scrolling_effect";
import { aosEffect } from "../plugins/aos";

preloader();
document.getElementById("myplace-first-expanded-image", functionDisplay(document.getElementById("myplace-first-expanded-image"), "myplace-expanded-img"));
document.getElementById("hplace-first-expanded-image", functionDisplay(document.getElementById("hplace-first-expanded-image"), "hplace-expanded-img"));
document.getElementById("noa-first-expanded-image", functionDisplay(document.getElementById("noa-first-expanded-image"), "noa-expanded-img"));

window.functionDisplay = functionDisplay

functionColorChange();
navbarUnderline();
aosEffect();
titleEffect();
backgroundColorChange();
smoothScroll();
