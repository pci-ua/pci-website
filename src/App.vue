<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/navigation/NavBar.vue'
</script>

<template>
	<div>
		<RouterView />
		<NavBar />
	</div>
</template>

<style>
@import '@/assets/base.css';


nav {
	position: absolute;

	bottom: 0;
	left: 0;
	width: 100%;
	height: 4rem;
}


</style>

