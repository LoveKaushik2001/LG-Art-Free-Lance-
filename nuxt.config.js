export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "lg-art",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "title", property: "title", content: "ArtByLakshya" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  pages: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "gallery-id-prodId",
        path: "/gallery/:id/:prodId",
        component: resolve(__dirname, "pages/gallery/[id]/[prodId].vue"),
      });
      console.log("Generated Routes:", routes);
    },
  },
};
