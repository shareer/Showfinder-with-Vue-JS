import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import ShowDetails from "../components/ShowDetails.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "ShowDetails",
    component: ShowDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;