// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Holey",

      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          charset: "utf-8",
        },
        { name: "msapplication-TileColor", content: "#0e2821" },

        { name: "title", content: "Holey" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // {
        //   rel: "preconnect",
        //   href: "https://cms.niraan.co.design",
        //   crossorigin: "anonymous",
        // },
      ],
      bodyAttrs: {
        class: "preload",
      },
    },
  },

  pages: true,

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  css: ["~/assets/styles/main.scss"],

  devServer: {
    host: "0.0.0.0", // expose to network
    port: 3000,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            ' @use "@/assets/styles/_variable.scss" as *; @use "@/assets/styles/_mixins.scss" as *; @use "@/assets/styles/_fonts.scss" as *; ',
        },
      },
    },
  },

  modules: ["@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Cinzel",
        provider: "google",
        weights: ["500"],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
    // local: {
    //   GeneralSans: {
    //     src: [
    //       {
    //         path: "~/assets/fonts/GeneralSans-Regular.otf",
    //         weight: "400",
    //         style: "normal",
    //       },
    //       {
    //         path: "~/assets/fonts/GeneralSans-Medium.otf",
    //         weight: "500",
    //         style: "normal",
    //       },
    //       {
    //         path: "~/assets/fonts/GeneralSans-Semibold.otf",
    //         weight: "600",
    //         style: "normal",
    //       },
    //     ],
    //   },
    // },
  },
});
