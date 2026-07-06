import { onRequestGet as __api_uf_js_onRequestGet } from "C:\\Users\\nas\\Desktop\\lauken\\functions\\api\\uf.js"

export const routes = [
    {
      routePath: "/api/uf",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_uf_js_onRequestGet],
    },
  ]