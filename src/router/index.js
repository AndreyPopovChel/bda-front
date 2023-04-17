/**
 * Created by Andrey Popov on 12/11/20.
 */

import {createWebHistory, createRouter} from "vue-router";
import Families from "./families.vue";

const routes = [
    {
        path: "/",
        name: "Families",
        component: Families
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL.length === 0 ? '/' : process.env.BASE_URL),
    routes
});

export default router;