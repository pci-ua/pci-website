import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomePage.vue'
import LegalPage from '../views/LegalPage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: HomeView,
		},

		{
			path: '/mentions-legales',
			name: 'LegalPage',
			component: LegalPage,
		},
		{
			path: '/discord',
			name: 'Discord',
			redirect: () => window.location.href = 'http://discord.projetcohesion.info',
		},
		{
			path: '/instagram',
			name: 'Instagram',
			redirect: () => window.location.href = 'https://instagram.com/projet.cohesion',
		}
	]
})

export default router
