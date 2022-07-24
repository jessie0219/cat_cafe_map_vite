import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Map from '../views/MapPage.vue'
import CatCafe from '../views/CatCafePage.vue'
import CatCafeSelect from '../views/CatCafeSelectPage.vue'
import Cafe from '../views/CafePage.vue'
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