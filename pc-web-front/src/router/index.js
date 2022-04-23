import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import MentionsLegalesView from '../views/MentionsLegalesPage.vue'

import Projet_MinecraftView from '../views/projet/MinecraftPage.vue'
import Projet_AsteriadsView from '../views/projet/AsteriadsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/mentions',
      name: 'MentionsLegales',
      component: MentionsLegalesView
    },
	{
		path: '/projet/minecraft',
		name: 'MinecraftPage',
		component: Projet_MinecraftView
	},
	{
		path: '/projet/asteriads',
		name: 'AsteriadsPage',
		component: Projet_AsteriadsView
	}
  ]
})

export default router
