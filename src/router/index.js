import Vue from "vue";
import Router from "vue-router";
import Vueresource from "vue-resource";
import HelloWorld from "@/components/HelloWorld";
import Temp from "@/components/Temp";
import Tables from "@/components/Tables";
import Cars from "@/components/Cars";
import Car from "@/components/Car";
import Discount from "@/components/Discount";
import Disc from "@/components/Disc";
import Products from "@/components/Products";
import Product from "@/components/Product";
import Sofas from "@/components/Sofas";
import Decor from "@/components/Decor";
import VueResource from "vue-resource";

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: "/temp",
      name: "Temp",
      component: Temp
    },
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/tables",
      name: "Tables",
      component: Tables
    },
    {
      path: "/sofas",
      name: "Sofas",
      component: Sofas
    },
    {
      path: "/decor",
      name: "Decor",
      component: Decor
    },
    {
      path: "/discount",
      name: "Discount",
      component: Discount
    },

    {
      path: "/product/:id",
      props: true,
      name: "product",
      component: Product
    },

    {
      path: "/disc",
      name: "Disc",
      component: Disc
    },
    {
      path: "/cars",
      name: "Cars",
      component: Cars
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    }
  ],
  mode: "history"
});
