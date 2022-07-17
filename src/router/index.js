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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router