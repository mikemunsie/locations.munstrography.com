import AuthRoute from "./components/AuthRoute.vue";
import Home from "./components/Home.vue";
import Privacy from "./components/Privacy.vue";

export const routes = [
  {
    name: "Privacy",
    path: "/privacy",
    component: Privacy,
  },
  {
    path: "/:catchAll(.*)",
    component: AuthRoute,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
];
