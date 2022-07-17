import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Map from '../views/MapPage.vue'
import CatCafe from '../views/CatCafePage.vue'
import CatCafeSelect from '../views/CatCafeSelectPage.vue'
import Cafe from '../views/CafePage.vue'
import AddLocation from '../views/AddLocation.vue'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router