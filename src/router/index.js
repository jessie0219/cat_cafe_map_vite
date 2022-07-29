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
import CatCafe from '../views/CatCafePage.vue'
import Cafe from '../views/cafePage.vue'

import Navbar from '../components/HomeNavbar.vue'
import Footer from '../components/HomeFooter.vue'

import allaboutcatnav from '../views/allaboutcatnav.vue'
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

import Tenthingstoknow from '../components/article/Tenthingstoknow.vue'
import Suitable from '../components/article/Suitable.vue'
import storage from '../components/article/storage.vue'
import Drinkwater from '../components/article/Drinkwater.vue'

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
        path: '/HomeNavbar',
        name: 'HomeNavbar',
        component: Navbar
    },
    {
        path: '/HomeFooter',
        name: 'HomeFooter',
        component: Footer
    },
    // aboutcatnav
    {
        path: '/allaboutcatnav',
        name: 'allaboutcatnav',
        component: allaboutcatnav
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
    // aboutnewcat
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
    // article
    {
        path: '/Tenthingstoknow',
        name: 'Tenthingstoknow',
        component: Tenthingstoknow
    },
    {
        path: '/Suitable',
        name: 'Suitable',
        component: Suitable
    },
    {
        path: '/storage',
        name: 'storage',
        component: storage
    },
    {
        path: '/Drinkwater',
        name: 'Drinkwater',
        component: Drinkwater
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router