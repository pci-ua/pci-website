<template>
	<v-footer color="primary lighten-1" padless>

		<v-row>
			<v-col>
				<v-btn color="white" text rounded>
					<RouterLink to="/" class="footer-link">Home</RouterLink>
				</v-btn>
			</v-col>
			<v-col>
				<v-btn color="white" text rounded>
					<RouterLink to="/apropos" class="footer-link">À propos</RouterLink>
				</v-btn>
			</v-col>
			<v-col>
				<v-btn color="white" text rounded>
					<RouterLink to="/contact" class="footer-link">Contact</RouterLink>
				</v-btn>
			</v-col>
			<v-col>
				<v-btn color="white" text rounded>
					<RouterLink to="/mentions" class="footer-link">Mentions légales</RouterLink>
				</v-btn>
			</v-col>
		</v-row>


		<v-row>
			<v-col>
				&copy; {{ new Date().getFullYear() }} —
				<RouterLink to="/" class="footer-link">Projet et Cohésion en Informatique</RouterLink>
			</v-col>
		</v-row>

	</v-footer>
</template>

<style>
.footer-link {
	color: #618eff;
	font-weight: bold;
}

footer {
	text-align: center;
	width: 100%;

	background-color: #0c141ce0;
	line-height: 1.8rem;
}

v-btn {
	margin: 2em;
	text-align: center;
}

v-row {
	display: block;
}
</style>
