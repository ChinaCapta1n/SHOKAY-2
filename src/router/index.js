import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/home/index.vue';

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: "GRASSLAND CONSERVATION PROGRAM | SHOKAY"
        }
    },
    {
        path: "/yak",
        component: () => import('@/views/fiber/index.vue'),
        meta: {
            title: "FIBER | SHOKAY"
        }
    },
    {
        path: "/products",
        component: () => import("@/views/sourcing/index.vue"),
        meta: {
            title: "SOURCING | SHOKAY"
        }
    },
    {
        path: "/fibers",
        component: () => import("@/views/sourcing/sub-menu/fibers.vue"),
        meta: {
            title: "FIBERS & FILLINGS | SHOKAY"
        }
    },
    {
        path: "/yarns",
        component: () => import("@/views/sourcing/sub-menu/yarns.vue"),
        meta: {
            title: "YARNS | SHOKAY"
        }
    },
    {
        path: "/fabrics",
        component: () => import("@/views/sourcing/sub-menu/fabrics.vue"),
        meta: {
            title: "Fabrics"
        }
    },
    {
        path: "/accessories",
        component: () => import("@/views/sourcing/sub-menu/accessories.vue"),
        meta: {
            title: "ACCESSORIES | SHOKAY"
        }
    },
    {
        path: "/apparel",
        component: () => import("@/views/sourcing/sub-menu/apparel.vue"),
        meta: {
            title: "APPAREL | SHOKAY"
        }
    },
    {
        path: "/sub-accessories",
        component: () => import("@/views/sourcing/sub-menu/sub-accessories.vue"),
        meta: {
            title: "HOME & LIFESTYLE | SHOKAY"
        }
    },
    {
        path: "/design",
        component: () => import("@/views/design/index.vue"),
        meta: {
            title: "DESIGN PORTFOLIO | SHOKAY"
        }
    },
    {
        "path": "/fasion",
        component: () => import("@/views/design/sub-menu/fasion.vue"),
        meta: {
            title: "FASHION | SHOKAY"
        }
    },
    {
        "path": "/lifestyle",
        component: () => import("@/views/design/sub-menu/lifestyle.vue"),
        meta: {
            title: "LIFESTYLE | SHOKAY"
        }
    },
    {
        "path": "/artist",
        component: () => import("@/views/design/sub-menu/artist.vue"),
        meta: {
            title: "ARTIST | SHOKAY"
        }
    },
    {
        "path": "/corporate",
        component: () => import("@/views/design/sub-menu/corporate.vue"),
        meta: {
            title: "CORPORATE | SHOKAY"
        }
    },
    {
        path: "/marketing",
        component: () => import("@/views/marketing/index.vue"),
        meta: {
            title: "MARKETING | SHOKAY"
        }
    },
    {
        path: "/impact",
        component: () => import("@/views/impact/index.vue")
    },
    {
        path: "/community-development",
        component: () => import("@/views/impact/sub-menu/sustainable-development-golds/index.vue"),
        meta: {
            title: "SUSTAINABLE DEVELOPMENT GOALS | SHOKAY"
        }
    },
    {
        path: "/environment",
        component: () => import("@/views/impact/sub-menu/glassland-conservation-program/index.vue")
    },
    {
        path: "/blog",
        component: () => import("@/views/blog/index.vue"),
        meta: {
            title: "SHOKAY"
        }
    },
    {
        path: "/about-us",
        component: () => import("@/views/about-us/index.vue"),
        meta: {
            title: "ABOUT US | SHOKAY"
        }
    },
    {
        path: "/partners",
        component: () => import("@/views/about-us/sub-menu/partners.vue"),
        meta: {
            title: "PARTNERS | SHOKAY"
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior() {
        return {
            top: 0
        }
    },
    routes
})


router.beforeEach((to, from, next) => {

    if (to.path === "/impact") return;


    document.title = to.meta.title;

    next();
})

export default router;