import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import "@/assets/style.css";
import HomeView from "@/views/HomeView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import App from "@/App.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                title: "Home",
            },
        },
        {
            path: "/experience",
            name: "experience",
            component: ExperienceView, 
            meta: {
                title: "Experience",
            },
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView, 
            meta: {
                title: "Projects",
            },
        },
    ],
});  

router.beforeEach((to, from, next) => {
    document.title = "Zackry - " + to.meta.title;
    next();
});

createApp(App)
    .use(router)
    .mount("#app");
