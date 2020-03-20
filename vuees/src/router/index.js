import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/quickSort",
    name: "quickSort",
    component: () =>
      import(/* webpackChunkName: "quickSort" */ "../views/quickSort.vue")
  },
  {
    path: "/bubbleSort",
    name: "bubbleSort",
    component: () =>
      import(/* webpackChunkName: "bubbleSort" */ "../views/bubbleSort.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
