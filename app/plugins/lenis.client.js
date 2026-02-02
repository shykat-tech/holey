import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();

    const isMobile =
        import.meta.client &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
        smooth: !isMobile,
        smoothTouch: false,
        autoRaf: false,
        duration: isMobile ? 1 : 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1,
    });

    nuxtApp.provide("lenis", lenis);

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (import.meta.client) {
        router.afterEach(() => {
            lenis.scrollTo(0, {immediate: true});
        });
    }
});
