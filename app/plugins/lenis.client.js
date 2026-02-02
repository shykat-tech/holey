import { defineNuxtPlugin } from "#app";
import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();


    // 🔒 Lock scroll only on homepage
    if (import.meta.client) {
        document.documentElement.style.overflow = "hidden";
    }

    const isMobile =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        autoRaf: false,

        // 🐢 Slower on mobile
        duration: isMobile ? 2.8 : 1.2,
        touchMultiplier: isMobile ? 0.45 : 1,
    });

    nuxtApp.provide("lenis", lenis);

    let ready = false;

    function raf(time) {
        lenis.raf(time);

        if (!ready) {
            ready = true;
        }

        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ✅ ALWAYS SCROLL TO TOP ON ROUTE CHANGE
    if (import.meta.client) {
        router.afterEach(() => {
            // reset native scroll
            window.scrollTo(0, 0);
        });

        window.addEventListener("load", () => {
            setTimeout(() => {
                lenis.scrollTo(0, { immediate: true });
            }, 0);
        });
    }
});
