import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
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
      path: '/mentions',
      name: 'MentionsLegales',
      component: MentionsLegalesView
    },
	{
		path: '/projet/minecraft',
		name: 'Minecraft',
		component: MinecraftProjetView
	}
  ]
})

export default router
