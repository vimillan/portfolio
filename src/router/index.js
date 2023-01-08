import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/MainLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Landing",
        component: () => import("../views/Landing.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
