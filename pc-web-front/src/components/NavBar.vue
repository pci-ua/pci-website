<script setup>
import NavItem from './NavItem.vue'
</script>

<template>
	<nav>
		<RouterLink to="/"><h1> PCI </h1></RouterLink>

		<ul>
			<li>
				<NavItem name="tutos" />
				<div class="menu-deroulant">
					<NavItem name="Git" />
				</div>
			</li>
			<li> 
				<NavItem name="projet" />
				<div class="menu-deroulant">
					<NavItem localPath="/projet/minecraft" name="Minecraft" />
					<NavItem localPath="/projet/asteriads" name="Aster.ia.ds" />
				</div>
			</li>
			<li> <NavItem name="à propos" /> </li>
			<li> <NavItem name="contact" /> </li>
		</ul>
	</nav>
</template>

<style>
nav {
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: 1.5rem;

	padding: 1rem;

	background-color: #0C141CE0;
}

nav * {
	margin: 0;
}

nav h1 {
	color: var(--color-title);
	text-align: left;
	text-decoration: none;
	float: left;
}

nav ul {
	list-style-type: none;
	float: right;
    margin-right: 1rem;
}

nav ul li {
	display: inline-block;
	margin: 0 1rem;
}

nav li:nth-child(1) { color: var(--color-A) ; }
nav li:nth-child(2) { color: var(--color-B) ; }
nav li:nth-child(3) { color: var(--color-C) ; }
nav li:nth-child(4) { color: var(--color-D) ; }

nav li:nth-child(1) .menu-deroulant > * { background-color: var(--color-A) ; }
nav li:nth-child(2) .menu-deroulant > * { background-color: var(--color-B) ; }
nav li:nth-child(3) .menu-deroulant > * { background-color: var(--color-C) ; }
nav li:nth-child(4) .menu-deroulant > * { background-color: var(--color-D) ; }
nav::after {
	position: absolute;
	left: 0;
	bottom: 0;
	height: 1px;
	width: 100%;
	content: ' ';

	background: linear-gradient( 90deg, var(--color-A),var(--color-D));
}

html {
	margin-top: 3.5rem !important;
}

nav li {
	position: relative;
	cursor: pointer;
}

nav .menu-deroulant {
	display: none;

	position: absolute;

	left: 50%;
	bottom: 0;
	padding-top: 1rem;
	transform: translate(-50%, 100%);
	z-index: 9999;

	transition: .2s;
}

nav .menu-deroulant *:hover {
	filter: brightness(120%);
}

nav .menu-deroulant > * {
	display: block;
	background-color: var(--color-A);
	color: white;
	padding: 1rem 2rem;
	margin: 3px 0;
	text-align: center;
}

nav ul li:hover .menu-deroulant {
	display: inline-block;
}
</style>