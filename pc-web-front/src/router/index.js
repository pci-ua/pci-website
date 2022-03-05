import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MinecraftProjetView from '../views/MinecraftProjetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
	{
		path: '/projet/minecraft',
		name: 'Minecraft',
		component: MinecraftProjetView
	}
  ]
})

export default router
