import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import CartPage from "@/pages/CartPage.vue";
import ResetPasswordPage from "@/pages/ResetPasswordPage.vue";
import About from "@/pages/About.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: ShopPage,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartPage,
    },
    {
        path: '/reset-pwd',
        name: 'ResetPasswordPage',
        component: ResetPasswordPage,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    }
];

const router= createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
