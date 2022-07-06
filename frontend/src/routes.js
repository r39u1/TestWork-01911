import AllArticle from './components/AllArticle.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';

export const routes = [
    {
        name: 'index',
        path: '/',
        component: AllArticle
    },
    {
        name: 'create',
        path: '/create',
        component: CreateArticle
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditArticle
    }
];