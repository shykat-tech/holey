import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MorphSVGPlugin);
    gsap.registerPlugin(SplitText);
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      MorphSVGPlugin,
    },
  };
});
