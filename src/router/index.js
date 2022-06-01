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
        import('../views/HomeView'),
    children: [{
        path: '',
        component: () =>
            import('../components/PersonHome.vue'),
    }, {
        path: "auth",
        name: "auth",
        meta: { title: "权限测试", auth: true },
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("user") == "admin") {
                next()
            } else { next("/home/404") }
        },
        component: () =>
            import("../components/AuthPage.vue")
    }, {
        path: "404",
        name: "404",
        meta: { title: "404" },
        component: () =>
            import("../components/NoPermission.vue")
    }, {
        path: "papertiger",
        name: "papertiger",
        meta: { title: "papertiger" },
        component: () =>
            import("../components/TempPage.vue")
    }, {
        path: "model",
        name: "model",
        meta: { title: "model" },
        component: () =>
            import("../components/TempModel.vue")
    }, {
        path: "commic",
        name: "commic",
        meta: { title: "commic" },
        component: () =>
            import("../components/TempCommic.vue")
    }, {
        path: "study",
        name: "study",
        meta: { title: "study" },
        component: () =>
            import("../components/TempStudy.vue")
    }, {
        path: "up",
        name: "up",
        meta: { title: "up" },
        component: () =>
            import("../components/TempUp.vue")
    }]
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.afterEach((to) => {
    document.title = to.meta.title
})

export default router