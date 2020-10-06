import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: About,
  },
  {
    path: "/variables",
    name: "Variables",
    component: () => import("../views/Variable.vue"),
  },
  {
    path: "/loops",
    name: "loops",
    component: () => import("../views/Loops.vue"),
  },
  {
    path: "/functions",
    name: "functions",
    component: () => import("../views/Functions.vue"),
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
