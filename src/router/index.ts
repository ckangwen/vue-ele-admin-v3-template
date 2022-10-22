import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    meta: {
      title: "首页",
      keepAlive: true,
    },
    component: () => import("@/pages/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
