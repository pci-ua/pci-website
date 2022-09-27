<template>

	<main>
		<img id="main-logo" src="@/assets/project-icon/Asteriads.svg" width="32" height="32" />
		<h1> Asteriads </h1>
		

		<section
			class="projet-external-link">
			<hr/>
			<a href="https://github.com/pci-ua/Aster.ia.ds"><img src="@/assets/GitHub-Mark-Light-64px.png" width="32" height="32"></a>
			<hr/>
		</section>


		<section
			class="projet-global-info"
			>
			<p> Basé sur le jeu des années 80 Asteroids, Aster.ia.ds est un remake 3D de ce dernier en	C++ avec OpenGL et Qt.</p>
			<p> Ce projet ce déroule en plusieurs étapes listé ci-dessous </p>
			<p> En plus de la 3D, ce jeu sera multijoueur et proposera aussi bien de joué via une interface graphique que via une API permettant à ce qui le souhaite de faire joué une IA </p>
			<p> Plus d'indication ci-dessous </p>
		</section>

		<section
			class="projet-progress"
			>
			<div
				v-for="step in steps"
				v-bind:key="step"
				v-on:click="setStep(steps.indexOf(step))"
				:class="'circle circle-'+step.status"
				>
				{{step.shorttitle}}
				<span
					v-if="steps.indexOf(step) == selectedStep"
					>▾</span>
			</div>
		</section>


		<section
			class="projet-info"
			v-if="selectedStep !== null"
			>
			<div
				v-for="i in steps[selectedStep].info"
				v-bind:key="steps.indexOf(i)"
				>
				<h4> {{ i.subtitle }} </h4>
				<p> {{ i.content }} </p>
				<a
					v-if="i.externalLink"
					:href="i.externalLink"
					target="_blank" > Lien externe </a>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data: () => ({
		selectedStep: null,
		steps: [
			{ 
				"title": "Création du sujet", 
				"shorttitle": "Init",
				"status": "done",
				"info": [
					{"subtitle":"L'idée","content":"L'association ayant déjà proposé un stage équivalent l'an passé, l'idée a été reprise avec comme souhait de pousser toujours plus loins, en apprenant de nos réussites et de nos échecs. Asteroid étant choisi comme jeu de base sur l'idée, étant assez simple mais avec des mécaniques intérressantes. Après l'obtention de l'accord de M Igor Stephan responsable de la L3 informatique le projet à pu démarrer."},
					{"subtitle":"Premieres ébauches","content":"Après un travail interne au bureau, une version a été proposer pour validation à M Stephan, version accepté et mise à disposition des étudiants pour qu'il puisse prendre connaissance du sujet et sucité des questions et d'éventuels intéressé.","externalLink":"https://github.com/pci-ua/Aster.ia.ds/blob/8f454c33a6f03743092bd2f9dca8002556f1be57/README.md#readme"},
					{"subtitle":"Dernier préparatif","content":"Après que des étudiants se soit positionner et avant le début du projet quelques dernier ajustement et préparation ont été nécessaires, tel que la configuration du git pour les étudiants et des slides de présentations plus précises avant le lancement de la seconde phase."}
				],
			},
			{
				"title": "Développement initial par les étudiants",
				"shorttitle": "TER",
				"status": "current",
				"info": [
					{"subtitle":"Initialisation","content":"Après une réunion de lancement avec une présentation plus exact,une partie questions-réponses les étudiants ce lance pour 8 semaine de déploiement à partir d'un projet vierge et des consignes fournis. "},
					{"subtitle":"Dévelopement","content":"Durant les 8 semaines les étudiants auront en moyenne 3 réunions toutes les 2 semaines, avec un étudiant en master représentant de l'association qui aura pour but de les guider et répondre à leurs questions, et un autre étudiant de l'association qui sera là en tant que client qui exprimera des besoins, des souhaits, des problèmes etc."},
					{"subtitle":"échéance","content":""},
				],
			},
			{
				"title": "Amélioration, sécurisation et préparation au déploiements du jeu",
				"shorttitle": "MAJ",
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
		setStep: function(i) { this.selectedStep = i; },
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
	margin: 0 auto;
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

.circle-done:before { background-color: lightgreen; box-shadow: lightgreen -1.5rem 0; }
.circle-done:after { background-color: lightgreen; box-shadow: lightgreen 1.5rem 0; }

.circle-current:before { 
	background: radial-gradient(	lightgreen 0%, lightgreen 32%, aquamarine 45%, aquamarine 100%);
	background-position-x: 90%;
	background-size: 220% 200%;
	background-position-y: 50%;
	box-shadow: lightgreen -1.5rem 0;
}
.circle-current:after { 
	background: radial-gradient(	aquamarine 0%, aquamarine 32%, lightslategray 45%, lightslategray	 100%);
	background-position-x: 90%;
	background-size: 220% 200%;
	background-position-y: 50%;
	box-shadow: lightslategray 1.5rem 0;
}

.circle-later:before { background-color: lightslategray;	box-shadow: lightslategray -1.5rem 0;}
.circle-later:after { background-color: lightslategray;	box-shadow: lightslategray 1.5rem 0;}

.circle span {
	position: absolute;
	top: 0;
	left: 50%;
	color: white;
	z-index: 99;
	transform: translate(-50%, -50%);
	margin: .5rem 0;
			font-size: 20pt;

}
.projet-info {
	width: clamp( 80% , 50rem, 98% );
	margin: auto;
}

.projet-global-info {
	width: clamp( 60% , 25rem, 98% );
	margin: auto;
}

.projet-global-info {
	color: white;
	font-family: mono;
}

.projet-progress {
	width: Calc(5 * 12.5rem);
}

.projet-info {
	display: grid;
	grid-template-columns: repeat(auto-fit, 25rem);
	justify-content: center;
	align-items: center;
	grid-gap: 3rem;
}

.projet-info > div {
	background-color: #0c0422;
}

.projet-info > div > p {
	color: white;
}

.projet-info > div > h4 {
	position: relative;
}
.projet-info > div > h4:after {
	display: block;
	height: 2px;
	width: 2.7rem;
	
	position: absolute;
	bottom: -2px;
	left: 0;
	
	background-color: #618EFF;
	content: ' ';
}

.projet-info > div {
	position: relative;
}
.projet-info div:before {
	
	display: block;
	height: 4rem;
	width: 3rem;
	
	position: absolute;
	top: -2px;
	right: -2px;
	
	content: ' ';
	
	box-shadow: #618EFF 2px -2px;	
}
.projet-info div:after {
	
	display: block;
	height: 2rem;
	width: 3rem;
	
	position: absolute;
	bottom: -2px;
	left: -2px;
	
	content: ' ';
	
	box-shadow: #618EFF -2px 2px;	
}

.projet-info a {
	float: right;
	color: gray;
	font-family: 'Zen Dots', sans-serif;
}

</style>