import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import ShowDetails from '../components/ShowDetails.vue';

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

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: () => import("../components/Home.vue"),
//     meta: {
//       prefetch: true,
//     },
//   },
//   {
//     path: "/details",
//     name: "ShowDetails",
//     component: () => import("../components/ShowDetails.vue"),
//     meta: {
//       prefetch: true,
//     },
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;