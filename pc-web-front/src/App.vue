<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import PathNavigator from '@/components/PathNavigator.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <header>
    <img alt=" " id="background" src="@/assets/BackgroundShape.svg" />

	<NavBar />
	<PathNavigator />
  </header>
  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>

<style>
@import '@/assets/base.css';

#background {
    position: absolute;
    bottom: -12rem;
    left: -3rem;
	z-index: -1;
}
</style>

