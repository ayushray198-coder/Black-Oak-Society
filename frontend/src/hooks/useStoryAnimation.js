import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useStoryAnimation(sectionRef, imageRef) {
    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {

            /* Image Reveal */

            gsap.from(".story-image", {
                opacity: 0,
                y: 80,
                scale: 0.94,
                duration: 1.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            /* Content Stagger */

            gsap.from(".story-content > *", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".story-content",
                    start: "top 75%",
                },
            });

            /* Luxury Parallax */

            gsap.to(imageRef.current, {
                y: -10,

                ease: "none",

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

        }, sectionRef);

        return () => ctx.revert();

    }, [sectionRef, imageRef]);
}