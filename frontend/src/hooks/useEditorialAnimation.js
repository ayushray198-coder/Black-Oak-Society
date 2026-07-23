import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useEditorialAnimation(sectionRef, imageRef) {
    useGSAP(() => {
        const section = sectionRef.current;
        const image = imageRef.current;

        if (!section || !image) return;

        const ctx = gsap.context(() => {

            const content = section.querySelectorAll("h2, p, button, span");

            gsap.set(content, { opacity: 0, y: 40 });

            gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    once: true,
                },
            });

            gsap.fromTo(
                image,
                {
                    opacity: 0,
                    scale: 0.92,
                    y: 40,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            gsap.to(image, {
                y: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

        }, section);

        return () => ctx.revert();
    }, []);
}

export default useEditorialAnimation;