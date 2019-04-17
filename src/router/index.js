import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat', //this  is the route that we want to connect a route guard to. The route guard we want to implement is called Before/enter. So it loads before the compnent is loaded.  
      name: 'Chat',
      component: Chat,
      props: true, 
      beforeEnter: (to, from, next) => { //the routeguard will take in 3 parameters, to from and next.
        if(to.params.name){
          next()
        } else {
          next({ name: 'Welcome' })
        }
      }
    }
  ]
})
