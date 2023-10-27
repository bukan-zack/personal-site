import "./style.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import NotFound from "./pages/NotFound.vue";
import App from "./App.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/contact",
            component: Contact,
        },
        {
            path: "/:pathMatch(.*)*",
            component: NotFound,
        },
    ],
});

createApp(App)
    .use(router)
    .mount('#app');