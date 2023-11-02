import Vue from 'vue';
import Router from 'vue-router';
import TestTask from '@/components/TestTask.vue';
import HomeView from '@/views/HomeView.vue';
import NotFound from '@/components/NotFound.vue';
import TaskDetail from '@/components/TaskDetail.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history', 
  routes: [
    {
      path: '/todo-list',
      name: 'TestTask',
      component: TestTask
    },
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/task/:id',
      name: 'TaskDetail',
      component: TaskDetail,
      props: true,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

export default router;

