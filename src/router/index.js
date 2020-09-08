import Vue from "vue";
import VueRouter from "vue-router";
import MyRepo from "../views/MyRepo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Repo",
    component: MyRepo
  },
  {
    path: "/:username",
    name: "UserRepo",
    component: MyRepo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
