import {gsap} from "gsap";


// console.log("is dots.js working");
 gsap.set("#oval-three",{transformOrigin:"center"});
 gsap.set("#play",{transformOrigin:"center"});

const dotsTL = gsap.timeline();

// dotsTL.to(".oval",{duration:2, y: -300, stagger: 1, ease: "elastic.out(1, 0.3)"})
//         .to(".oval",{duration:2, y: 0, stagger: 1, ease: "bounce.out"}, "=-6");
dotsTL.to("#oval-one",{duration: .5, y: -300})
         .to("#oval-one",{duration: .5, y: 0, ease: "elastic.out"},"second")
        .to("#oval-two",{duration:.5, y: -300},"second")
        .to("#oval-two",{duration:.5, y: 0, ease: "bounce.out"},"third")
        .to("#oval-three",{duration:.5, y: -300},"third")
        .to("#oval-three",{duration:.5, y: 0, ease: "bounce.out"},"fourth")
        .to("#oval-four",{duration:.5, y: -300},"fourth")
        .to("#oval-four",{duration:.5, y: 0, ease: "bounce.out"},"fifth")
        .to("#oval-five",{duration:.5, y: -300},"fifth")
        .to("#oval-five",{duration:.5, y: 0, ease: "bounce.out"},"six")
        .to("#oval-six",{duration:.5, y: -300},"six")
        .to("#oval-six",{duration:.5, y: 0, ease: "bounce.out"},"seven")
        .to("#oval-one",{duration: .5, y: -300})
         .to("#oval-one",{duration: .5, y: 0, ease: "elastic.out"},"eight")
        .to("#oval-two",{duration:.5, y: -300},"eight")
        .to("#oval-two",{duration:.5, y: 0, ease: "bounce.out"},"nine")
        .to("#oval-three",{duration:.5, y: -300},"nine")
        .to("#oval-three",{duration:.5, y: 0, ease: "bounce.out"},"ten")
        .to("#oval-four",{duration:.5, y: -300},"ten")
        .to("#oval-four",{duration:.5, y: 0, ease: "bounce.out"},"eleven")
        .to("#oval-five",{duration:.5, y: -300},"eleven")
        .to("#oval-five",{duration:.5, y: 0, ease: "bounce.out"},"twelve")
        .to("#oval-six",{duration:.5, y: -300},"twelve")
        .to("#oval-six",{duration:.5, y: 0, ease: "bounce.out"})
        .to("#oval-three",{duration:2, y: 0, scale: 4}, "thirteen")
        .to(".oval",{duration: 1, autoAlpha:0}, "thirteen")
        .to("#play",{duration: 2, autoAlpha:1, y: 60}, "thirteen")
        .to("#loading",{duration: 1, autoAlpha:0}, "thirteen")
        .to("#complete",{duration: .5, autoAlpha:1})
        .to("#play",{duration: .5, scale: .5}, "pulse")
        .to("#oval-three",{duration: .5, scale: 2.5}, "pulse")
        .to("#play",{duration: 1, fill:"#E073CF"}, "color")
        .to("#oval-three",{duration: 1, fill:"#7382E0"}, "color")
        .to("#svg-demo",{duration: 1, backgroundColor:"#fff"}, "color");

export function dotsAnimation(){
    return dotsTL;
}
