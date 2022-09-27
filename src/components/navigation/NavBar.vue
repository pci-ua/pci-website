<script setup>
import NavItem from './NavItem.vue'
</script>

<template>
	<nav>
		<NavItem localPath="/" name="Informations" />
		<NavItem localPath="/discord" name="Discord" />
		<NavItem localPath="/" name="Projets" />
		<NavItem localPath="/" name="Événements" />
		<NavItem localPath="/instagram" name="Instagram" />
		<NavItem localPath="/mentions-legales" name="Mentions Légales" />
	</nav>
</template>

<style>

nav > *::before { 
	content: ' ';
	width: 30px;
	height: 30px;
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center;
}
nav > *:nth-child(1)::before { background-image: url('@/assets/icons/information.svg'); }
nav > *:nth-child(2)::before { background-image: url('@/assets/icons/discord.svg'); }
nav > *:nth-child(3)::before { background-image: url('@/assets/GitHub-Mark-Light-64px.png'); }
nav > *:nth-child(4)::before { background-image: url('@/assets/GitHub-Mark-Light-64px.png'); }
nav > *:nth-child(5)::before { background-image: url('@/assets/icons/instagram.svg'); }
nav > *:nth-child(6)::before { background-image: url('@/assets/icons/mentions-legales.svg'); }

nav {
  background-color: #00808030;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  
  height: 100%;
  font-family: monospace;
  font-weight: bold;
  font-size: 12pt;
  
  border: none;
  border-top: 2px solid #008080;
}

nav > * {
  
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: white;
  
  cursor: pointer;
  border-right: 2px solid #00808020;
}
nav > *:hover {
  background-color: #00808040;
  
  transition: .3s;
}

</style>