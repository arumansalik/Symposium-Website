import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Fade In Animation
export const fadeInAnimation = (element, options = {}) => {
    const {
        duration = 1,
        delay = 0,
        y = 50,
        ease = 'power3.out'
    } = options;

    gsap.fromTo(
        element,
        { opacity: 0, y },
        {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease
        }
    );
};

// Scroll Trigger Reveal
export const scrollReveal = (element, options = {}) => {
    const {
        start = 'top 80%',
        end = 'bottom 20%',
        toggleActions = 'play none none reverse'
    } = options;

    gsap.fromTo(
        element,
        { opacity: 0, scale: 0.9 },
        {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: element,
                start,
                end,
                toggleActions
            }
        }
    );
};

// Hover Effect
export const hoverEffect = (element, scale = 1.05) => {
    element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale, duration: 0.3 });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
    });
};