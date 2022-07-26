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

import allaboutcatnav from '../views/allaboutcatnav.vue'
import Navbar from '../components/CatNavbar.vue'
import allaboutcat from '../components/aboutcatnav/allaboutcat.vue'
import newcat from '../components/aboutcatnav/newcat.vue'
import muchcat from '../components/aboutcatnav/muchcat.vue'
import oldcat from '../components/aboutcatnav/oldcat.vue'
import catsay from '../components/aboutcatnav/catsay.vue'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router