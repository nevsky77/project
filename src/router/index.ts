import { createWebHistory, createRouter } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // alias: '/tutorials',
    name: 'home-page',
    component: () => import('../view/HomePage.vue'),
  },
  {
    path: '/data-page',
    // alias: '/tutorials',
    name: 'data-page',
    component: () => import('../view/DataPage.vue'),
  },
  // {
  //   path: "/tutorials/:id",
  //   name: "tutorial-details",
  //   component: () => import("./components/TutorialDetails.vue"),
  // },
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddTutorial.vue"),
  // },
]

const index = createRouter({
  history: createWebHistory(),
  routes,
})

export default index
