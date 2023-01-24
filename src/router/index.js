import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import AddCategory from "../views/Category/AddCategory";
import Category from "../views/Category/Category";
import Product from "../views/Product/Product";
import Admin from "../views/Admin";
import AddProduct from "../views/Product/AddProduct";
import EditCategory from "../views/Category/EditCategory";
import EditProduct from "../views/Product/EditProduct";
import ShowDetails from "../views/Product/ShowDetails";
import ListProducts from "../views/Category/ListProducts";

import Singup from "../views/Signup";
import Signin from "../views/Signin";



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/category/show/:id",
    name: "ListProducts",
    component: ListProducts,
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category",
    name: "Category",
    component: Category,
  },
  // category edit
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  // admin home page
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/product",
    name: "AdminProduct",
    component: Product,
  },
  // add product
  {
    path: "/admin/product/new",
    name: "AddProduct",
    component: AddProduct,
  },
  // edit product
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },

  // show details of product
  {

    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },

    // signup and singin 
    {
      path: '/signup',
      name: 'Signup',
      component: Singup
    },

    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },



   
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
