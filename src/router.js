import { createRouter, createWebHistory } from 'vue-router'

const UserAuth = () => import('./pages/auth/UserAuth.vue')
const WorkoutList = () => import('./pages/workout/WorkoutList.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/auth', component: UserAuth },
    { path: '/', redirect: '/auth' },
    { path: '/workouts', component: WorkoutList },
  ],
})

export default router
