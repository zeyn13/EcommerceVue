import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory'
import Category from '../views/Category/Category'
import Product from '../views/Product/Product'
import Admin from "../views/Admin";
import AddProduct from "../views/Product/AddProduct"
import EditCategory from "../views/Category/EditCategory";
import EditProduct from "../views/Product/EditProduct";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  // admin edit 
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
    // admin home page
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/product',
      name: 'AdminProduct',
      component: Product
    },

    //add product
{
      path: '/admin/product/new',
      name: 'AddProduct',
      component: AddProduct
},
//edit product
{
  path: '/admin/product/:id',
  name: 'EditProduct',
  component: EditProduct
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
