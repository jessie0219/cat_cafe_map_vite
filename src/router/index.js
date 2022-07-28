import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Map from '../views/MapPage.vue'
import Adoption from '../views/AdoptionPage.vue'
import AdoptionAll from '../views/AdoptionAll.vue'
import CatCafe from '../views/CatCafePage.vue'
import Cafe from '../views/cafePage.vue'

import allaboutcatnav from '../views/allaboutcatnav.vue'
import Navbar from '../components/CatNavbar.vue'
import allaboutcat from '../components/aboutcatnav/allaboutcat.vue'
import newcat from '../components/aboutcatnav/newcat.vue'
import muchcat from '../components/aboutcatnav/muchcat.vue'
import oldcat from '../components/aboutcatnav/oldcat.vue'
import catsay from '../components/aboutcatnav/catsay.vue'

import newcatnav from '../views/newcatnav.vue'
import all from '../components/aboutnewcat/all.vue'
import before from '../components/aboutnewcat/before.vue'
import after from '../components/aboutnewcat/after.vue'
import other from '../components/aboutnewcat/other.vue'
import CatCafeSelect from '../views/CatCafeSelectPage.vue'
import AddLocation from '../views/AddLocation.vue'

import GroupBuying from '../views/GroupBuying/GroupBuying.vue'
import Product from '../views/GroupBuying/ProductDetail.vue'
import Cart from '../views/GroupBuying/Cart.vue'
import Discount from '../views/Discount/Discount.vue'
import DiscountDetail from '../views/Discount/DiscountDetail.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/map',
        name: 'map',
        component: Map
    },
    {
        path: '/adoption',
        name: 'Adoption',
        component: Adoption
    },
    {
        path: '/adoptionAll',
        name: 'AdoptionAll',
        component: AdoptionAll,
        path: "/login", component: () => import("../views/LoginView.vue"),
    },
    {
        path: "/user_logins", component: () => import("../views/userLogin/SuserSignup.vue"),
    },
    {
        path: "/user_login", component: () => import("../views/userLogin/LoginUser.vue"),
    },
    {
        path: "/shop_login", component: () => import("../views/shopLogin/LoginShop.vue"),
    },
    {
        path: "/user_signup", component: () => import("../views/userLogin/SignupUser.vue"),
    },
    {
        path: "/shop_signup", component: () => import("../views/shopLogin/SignupShop.vue"),

    },
    {
        path: "/shop", component: () => import("../views/shop/ShopView.vue"),
    },
    {
        path: "/user_signups", component: () => import("../views/userLogin/SuserSignup.vue"),
    },
    {
        path: "/shop_signups", component: () => import("../views/shopLogin/SshopSignup.vue"),
    },
    {
        path: "/user_setting", component: () => import("../views/user/UserSetting.vue"),
    },
    {
        path: "/shop_setting", component: () => import("../views/shop/ShopSetting.vue"),
    },
    {
        path: "/shop_home", component: () => import("../views/shop/ShopSetting.vue"),
    },
    {
        path: "/cart", component: () => import("../views/user/CartView.vue"),
    },
    {
        path: "/order", component: () => import("../views/user/OrderView.vue"),
    },
    {
        path: "/like", component: () => import("../views/user/LikeView.vue"),
    },
    {
        path: "/info", component: () => import("../views/user/InfoView.vue"),
    },
    {
        path: "/shop_info", component: () => import("../views/shop/ShopInfo.vue"),
    },
    {
        path: "/shop_home_write", component: () => import("../views/shop/ShopWrite.vue"),

    },
    {
        path: '/catCafe',
        name: 'catCafe',
        component: CatCafe
    },
    {
        path: '/cafe',
        name: 'cafe',
        component: Cafe
    },

    {
        path: '/allaboutcatnav',
        name: 'allaboutcatnav',
        component: allaboutcatnav
    },
    {
        path: '/CatNavbar',
        name: 'CatNavbar',
        component: Navbar
    },
    {
        path: '/allaboutcat',
        name: 'allaboutcat',
        component: allaboutcat
    },
    {
        path: '/newcat',
        name: 'newcat',
        component: newcat
    },
    {
        path: '/muchcat',
        name: 'muchcat',
        component: muchcat
    },
    {
        path: '/oldcat',
        name: 'oldcat',
        component: oldcat
    },
    {
        path: '/catsay',
        name: 'catsay',
        component: catsay
    },

    {
        path: '/newcatnav',
        name: 'newcatnav',
        component: newcatnav
    },
    {
        path: '/all',
        name: 'all',
        component: all
    },
    {
        path: '/before',
        name: 'before',
        component: before
    },
    {
        path: '/after',
        name: 'after',
        component: after
    },
    {
        path: '/other',
        name: 'other',
        component: other
    },

    {
        path: '/addLocation',
        name: 'AddLocation',
        component: AddLocation
    },
    {
        path: '/catCafeSelect',
        name: 'CatCafeSelect',
        component: CatCafeSelect
    },
    {
        path: '/groupbuying',
        name: 'groupbuying',
        component: GroupBuying
    },
    {
        path: '/products/:id',
        name: 'product',
        component: Product
    },
    {
        path: '/cart/',
        name: 'cart',
        component: Cart,
    },
    {
        path: '/discount',
        name: 'discount',
        component: Discount
    },
    {
        path: '/discountdetail',
        name: 'discountdetail',
        component: DiscountDetail
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router