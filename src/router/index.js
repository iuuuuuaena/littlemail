import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Log from '../views/LogView.vue'
import News from '../views/newsView.vue'
import Weather from '@/views/weatherView.vue'
import PGoods from '@/views/PublishGoods.vue'

// 个人界面
import Person from '@/views/PersonView.vue'
Vue.use(VueRouter)


const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/weather',
        name: 'weather',
        component: Weather
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/publishgoods',
        component: PGoods
    },
    {
        path: '/log',
        name: 'log',
        component: Log
    },
    {
        // 个人界面
        path: '/personal',
        component: Person
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router