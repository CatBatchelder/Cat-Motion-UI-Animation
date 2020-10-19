console.log( "is scripts working");

import {gsap} from "gsap";
import {dotsAnimation} from "./demo.js";
import {checkAnimation} from "./demo.js";

const mainTL = gsap.timeline();
mainTL.add(dotsAnimation())
    .add(checkAnimation());
 