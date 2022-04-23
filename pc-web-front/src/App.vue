<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/navigation/NavBar.vue'
import PathNavigator from '@/components/navigation/PathNavigator.vue'
import Footer from '@/components/GenericFooter.vue'

</script>

<template>
	<div>
		<header>
			<NavBar />
			<PathNavigator />
		</header>

		<RouterView />

		<footer>
			<Footer />
		</footer>
	</div>
</template>

<style>
@import '@/assets/base.css';

body {
	background-image: url('@/assets/BackgroundShape.svg');
	background-repeat: no-repeat;
	background-position-x: -2rem;
	background-position-y: 13rem;
	background-attachment: fixed;
}

#app {
	background-color: #0004;
	width: Calc(100% - .5rem);
}
</style>

