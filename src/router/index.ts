import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [ // 加入类型声明可以约束配置项，提升书写体验
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
