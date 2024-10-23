import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    home: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    home: "about",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
