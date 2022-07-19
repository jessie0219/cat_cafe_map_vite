// import { createRouter, createWebHashHistory } from "vue-router";
// const routes = [
//     {
//         // path: "/", component: () => import("../components/HelloWorld.vue"),
//     }
// ]
// export default createRouter({
//     history: createWebHashHistory(),
//     routes
// });
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Map from '../views/MapPage.vue'
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