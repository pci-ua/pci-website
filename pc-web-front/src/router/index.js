import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import MentionsLegalesView from '../views/MentionsLegales.vue'

import Projet_MinecraftView from '../views/projet/Minecraft.vue'
import Projet_AsteriadsView from '../views/projet/Asteriads.vue'

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
		component: Projet_MinecraftView
	},
	{
		path: '/projet/asteriads',
		name: 'Asteriads',
		component: Projet_AsteriadsView
	}
  ]
})

export default router
