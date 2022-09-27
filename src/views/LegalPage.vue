<template>
	<main>
		<h1> Mentions Légales </h1>

		<section>
			<h2> L'association </h2>

			<article>
				<h3>Information sur l'association</h3>
				<pre>
					<label> Nom exact : </label> <em> Projets et Cohésion en Informatique </em>
					<label> N° SIREN : </label> <em> 901640698 </em>
					<label> N° SIRET : </label> <em> 901 640 698 00014 </em>
					<label> N° RNA : </label> <em> W491019959 </em>
					<label> Code APE : </label> <em> 94.99Z </em> Autres organisations fonctionnant par adhésion volontaire
					<a href="https://journal-officiel-datadila.opendatasoft.com/api/v2/catalog/datasets/jo_associations/records?select=%2A&where=numero_rna%20like%20%22W491019959%22&limit=10&offset=0&lang=fr&timezone=UTC"> Déclaration au journal officiel des associations (json)</a>
					<a href="https://entreprise.data.gouv.fr/api/rna/v1/id/W491019959"> Statut actuel auprès du gouvernement (json)</a>
				</pre>
			</article>
		</section>		
		<section>
			<h2> Site Web </h2>
			
			<article>
				<h3> Éditeur </h3>
				<pre>
Projet et Cohésion en Informatique, PC[i]
2 Boulevard de Lavoisier
49100 Angers, France
SIRET : 901 640 698 00014
Contact :
<a href="mailto:contact@projetcohesion.info"> contact@projetcohesion.info</a>
				</pre>
			</article>
			
			<article>
				<h3>Directeur de publication</h3>
				<pre>
Matéo Grimaud (Président)
<a href="mailto:presidence@projetcohesion.info"> presidence@projetcohesion.info</a>
				</pre>
			</article>

			<article>
				<h3>Prestataire d'Hébergement</h3>
				<pre>
Pour pci.leria-etud.univ-angers.fr
Laboratoire d'Etudes et de Recherche en Informatique d'Angers (LERIA)
2 Boulevard de Lavoisier
49100 Angers, France
				</pre>
			</article>
		
		</section>
		<section>

			<h2> Données Personnelles </h2>

			<article>
				<h3> Droits sur vos données </h3>
				<pre>
Responsable des fichiers des données : Louis Euvrard (Responsable Projets)

Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, l’utilisateur dispose d’un droit d’accès, de modification et de suppression des informations collectées par PC[i].

Pour exercer ce droit, il reviendra à l’utilisateur d’envoyer un message à l’adresse suivante : 
<a href="mailto:contact@projetcohesion.info">contact@projetcohesion.info</a>
				</pre>
			</article>

			<article>
				<h3> Stockage des Données Personnelles </h3>
				<pre>
Nous ne transmettons à aucun service externe les informations obtenues.

Les données sont par défauts conserver un maximum de 30 jours après l'événements ou la fin de l'adhésion.

Les données récoltés sont toujours réduites au minimum et l'utilisateur en est toujours informés.
				</pre>
			</article>

			<article>
				<h3> Traitement des Données Personnelles </h3>
				<pre>
Nous ne transmettons à aucun service externe les informations issuent d'éventuels traitement des données.

Seul les traitements nécessaires et pour lequel les personnes ont consenti est réalisé.
				</pre>
			</article>

		</section>

	</main>
</template>

<style>
main {
	width: clamp(40vw, 75rem, 95vw);
}

h1, h2 {
	text-align: center;
}

section {
	margin: 3rem 0;
}

h2 {
	grid-column: 1/999;
	color: orange;
}

section {
	display: grid;
	grid-template-columns: repeat(auto-fit, 25rem);
}

main article {
	white-space: pre-line;
}

main a {
	color: #13caca;
	text-decoration: #13caca underline;
}


main pre {
	white-space: pre-line;
}
</style>
