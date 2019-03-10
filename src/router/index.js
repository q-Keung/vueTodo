import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'todo',
      component: () => import('../views/todo.vue'),
      // beforeEnter: (to, from, next) => {
      //   console.log(to, from)
      //   next();
      // },
      children: [{
          path: '/all',
          name: 'all',
          component: () => import('../components/all.vue')
        },
        {
          path: '/did',
          name: 'did',
          component: () => import('../components/did.vue')
        },
        {
          path: '/will',
          name: 'will',
          component: () => import('../components/will.vue')
        }
      ]
    }
  ]
})
