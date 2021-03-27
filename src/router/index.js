import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/category/:id/",
    name: "CategoryProductRetrieve",
    meta: {
      title: "Producto por Categoria",
    },
    component: () => import("../views/ProductsRetrieve.vue"),
  },
  // {
  //   path: "/product/:id/",
  //   name: "CategoryProductRetrieve",
  //   meta: {
  //     title: "Producto buscados",
  //   },
  //   component: () => import("../views/ProductsRetrieve.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? to.meta.title + " - Happy mascota"
    : "Happy mascota";
  next(true);
});

export default router;
