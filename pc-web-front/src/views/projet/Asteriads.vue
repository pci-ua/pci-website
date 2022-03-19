<template>

	<img id="main-logo" src="@/assets/project-icon/Asteriads.svg" width="32" height="32" />
	<h1> Asteriads </h1>
	

	<div
		class="projet-external-link">
		<hr/>
		<a href="https://github.com/pci-ua/Aster.ia.ds"><img src="@/assets/GitHub-Mark-Light-64px.png" width="32" height="32"></a>
		<hr/>
	</div>


	<div
		class="projet-global-info"
		>
		<p> Basé sur le jeu des années 80 Asteroids, Aster.ia.ds est un remake 3D de ce dernier en  C++ avec OpenGL et Qt.</p>
		<p> Ce projet ce déroule en plusieurs étapes listé ci-dessous </p>
		<p> En plus de la 3D, ce jeu sera multijoueur et proposera aussi bien de joué via une interface graphique que via une API permettant à ce qui le souhaite de faire joué une IA </p>
		<p> Plus d'indication ci-dessous </p>
	</div>

	<div
		class="projet-progress"
		>
		<div
			v-for="step in steps"
			v-on:click="setStep"
			:class="'circle circle-'+step.status"
			>
			{{step.shorttitle}}
			<span
				v-if="steps.indexOf(step) == selectedStep"
				>▾</span>
		</div>
	</div>


	<div
		class="projet-info"
		v-if="selectedStep"
		>
		<div
			v-for="i in steps[selectedStep].info"
			>
			<h4> {{ i.subtitle }} </h4>
			<p> {{ i.content }} </p>
		</div>
	</div>

</template>

<script>
export default {
	data: () => ({
		selectedStep: null,
		steps: [
			{ 
				"title": "Création du sujet", 
				"shorttitle": "Création",
				"status": "done",
				"info": [
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
				],
			},
			{
				"title": "Développement initial par les étudiants",
				"shorttitle": "TER",
				"status": "current",
				"info": [
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				],
			},
			{
				"title": "Amélioration, sécurisation et préparation au déploiements du jeu",
				"shorttitle": "Upgrade",
				"status": "later",
				"info": [
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				],
			},
			{
				"title": "Version beta",
				"shorttitle": "Beta",
				"status": "later",
				"info": [
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				],
			},
			{
				"title": "First release",
				"shorttitle": "V1",
				"status": "later",
				"info": [
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{"subtitle":"Lorem ipsum","content":" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				],
			},
		]
	}),
	methods: {
		setStep: function() {
			this.selectedStep = Math.floor(Math.random()*this.steps.length); }
			,
	},
}

</script>

<style scoped>
#main-logo {
	margin: .1rem auto;
	display: block;
	width: 8rem;
	height: 8rem;
}

h1 {
	text-align: center;
}

.projet-progress {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 60%;
	margin: 2rem auto;
}

.projet-external-link {
	text-align: center;
}

.projet-external-link a {
	text-decoration: none;
	color: white;
	cursor: pointer;
}

.projet-external-link hr {
	width: 20vw;
}


.circle {
	width: 3.5rem;
	height: 3.5rem;
	background: none;
	border: white .5rem solid;
	border-radius: 50%;
	line-height: 3.5rem;
	text-align: center;
	position: relative;
	color: lightgoldenrodyellow;
	cursor: pointer;
	user-select: none;

}

.circle:after, .circle:before {
	content: '';
	width: .6rem;
	height:.6rem;
	display: block;
	border: none;
	border-radius: 50%;
	background-color: lightslategray;
	position: absolute;
	top: 50%;
}

.circle:after { right: 0; transform: translate( 2rem,-50%);}
.circle:before { left: 0; transform: translate(-2rem,-50%);}

.circle-later { border-color: lightslategray; }
.circle-current { border-color: aquamarine; }
.circle-done { border-color: lightgreen; }

.circle-done:before { background-color: lightgreen; }
.circle-done:after { background-color: lightgreen; }

.circle-current:before { 
	background: radial-gradient(  lightgreen 0%, lightgreen 32%, aquamarine 45%, aquamarine 100%);
	background-size-x: 220%;
	background-position-x: 90%;
	background-size: 220% 200%;
	background-position-y: 50%;
}
.circle-current:after { 
	background: radial-gradient(  aquamarine 0%, aquamarine 32%, lightslategray 45%, lightslategray	 100%);
	background-size-x: 220%;
	background-position-x: 90%;
	background-size: 220% 200%;
	background-position-y: 50%;
}

.circle-later:before { background-color: lightslategray; }
.circle-later:after { background-color: lightslategray; }

.circle span {
	position: absolute;
	top: 0;
	left: 50%;
	color: white;
	z-index: 99;
	transform: translate(-50%,0);
	top: -1rem;
}
.projet-info {
	width: clamp( 50% , 20rem, 98% );
	margin: auto;
}

.projet-global-info {
	width: clamp( 60% , 25rem, 98% );
	margin: auto;
}
</style>