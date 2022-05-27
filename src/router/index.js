import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView"
// import HomeView from "../views/HomeView"
// import HomeMain from "../components/HomeMain.vue"
// const HomeView =  () => import('../views/HomeView')
// const HomeMain = () => import('../components/HomeMain.vue')
const routes = [{
        path: '/',
        name: 'LoginView',
        component: LoginView,
        meta: { title: "登录pilipili" }
    },
    {
        path: '/home',
        name: 'home',
        meta: { title: "他的主页" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/HomeView'),
        children: [{
            path: '',
            component: () =>
                import ('../components/PersonHome.vue'),
        }]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // console.log(to, from, next)
    next()
})
router.afterEach((to) => {
    document.title = to.meta.title
})

export default router