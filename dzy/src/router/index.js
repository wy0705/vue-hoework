import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'
import page4 from '@/components/page4'
import page5 from '@/components/page5'
import center from '@/components/center'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'center',
      component: center,
    },
    {
      path: '/p1',
      name: 'page1',
      component: page1,
      children:[
        {
          path: '/p2',
          name: 'page2',
          component: page2,
        },
        {
          path: '/p3',
          name: 'page3',
          component: page3,
        },
        {
          path: '/p4',
          name: 'page4',
          component: page4,
        },
        {
          path: '/p5',
          name: 'page5',
          component: page5,
        },
       
      ]
    }
  ]
})
