// ./plugins/locomotive.client.ts

import LocomotiveScroll from "locomotive-scroll";

export default defineNuxtPlugin((nuxtApp) => {
  let locomotiveScroll = null;

  nuxtApp.hook("page:start", () => {
    locomotiveScroll?.destroy();
  });

  nuxtApp.hook("page:finish", () => {
    locomotiveScroll = new LocomotiveScroll();
  });
});
