import "bootstrap";

import { titleEffect } from "../components/title_effect";
import { prettyUnderline } from "../components/pretty_underline";
import { functionDisplay } from "../components/display_image";
import { functionColorChange } from "../components/color_change";
import { navbarUnderline } from "../components/navbar_underline";


titleEffect();

document.getElementById("hplace-first-expanded-image", functionDisplay(document.getElementById("hplace-first-expanded-image"), "hplace-expanded-img"));
document.getElementById("noa-first-expanded-image", functionDisplay(document.getElementById("noa-first-expanded-image"), "noa-expanded-img"));

window.functionDisplay = functionDisplay

functionColorChange();
navbarUnderline();
