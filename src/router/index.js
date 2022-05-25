import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView"
import HomeView from "../views/HomeView"
import HomeMain from "../components/HomeMain.vue"
const routes = [{
    path: '/',
    name: 'LoginView',
    component: LoginView
},
{
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView,
    children: [
        {
            path: '', 
            component: HomeMain,
        }
    ]
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router