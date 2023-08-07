import { createRouter, createWebHistory } from "vue-router";

const Users = () => import("../views/Users.vue");
const UserDetailsPage = () => import("../views/UserDetailsPage.vue");

const routes = [
  { path: "/", component: Users },
  { path: "/details", component: UserDetailsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
