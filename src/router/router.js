import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutView from "../Layout/LayoutView.vue";

const routes = [
    {
        path: '/',
        name: 'LayoutView',
        component: LayoutView,
        children: [
            {path: '', name: 'HomeView', component:HomeView}
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
