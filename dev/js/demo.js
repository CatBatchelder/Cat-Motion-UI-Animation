// import {gsap} from "gsap";
// // import {gsap} from "gsap/gsap-core";

// gsap.set("#thirdoval",{transformOrigin:"center"});
// gsap.set("#check",{transformOrigin:"center"});

// const dotsTL = gsap.timeline();

// dotsTL.to("#firstoval",{duration:.5, y: -50})
//         .to("#firstoval",{duration:.5, y: 0},"second")
//         .to("#secondoval",{duration:.5, y: -50},"second")
//         .to("#secondoval",{duration:.5, y: 0},"third")
//         .to("#thirdoval",{duration:.5, y: -50},"third")
//         .to("#thirdoval",{duration:.5, y: 0},"fourth")
//         .to("#secondoval",{duration:.5, y: -50},"fourth")
//         .to("#secondoval",{duration:.5, y: 0},"fifth")
//         .to("#firstoval",{duration:.5, y: -50},"fifth")
//         .to("#firstoval",{duration:.5, y: 0},"six")
//         .to("#secondoval",{duration:.5, y: -50},"six")
//         .to("#secondoval",{duration:.5, y: 0},"seven")
//         .to("#thirdoval",{duration:.5, y: -50},"seven")
//         .to("#thirdoval",{duration:.5, y: 0, scale: 100});
            
// console.log("is demo working")

// export function dotsAnimation(){
//     return dotsTL;
// }

// const checkTL = gsap.timeline();

// checkTL.to("#circle",{duration:1, autoAlpha:1})
//     .to("#check",{duration:1, autoAlpha:1, rotate: 360});
            

// export function checkAnimation(){
//     return checkTL;
// }