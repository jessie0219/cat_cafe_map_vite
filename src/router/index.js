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
import Adoption from '../views/AdoptionPage.vue'
import AdoptionAll from '../views/AdoptionAll.vue'

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
        component: AdoptionAll
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router