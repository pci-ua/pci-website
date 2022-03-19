<template>
  <h1 style="text-align: center">Mentions Légales</h1>
  <section>
    <div class="sous-titre">
      <span
        >Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004,
        les mentions légales du site projetcohesion.info sont précisées sur
        cette page.</span
      >
    </div>
    <div class="flex">
      <article>
        <h3>Éditeur</h3>
        <p>
          Projet et Cohésion en Informatique, PC[i]
          <br />
          2 Boulevard de Lavoisier
          <br />
          49100 Angers, France
          <br />
          SIRET : 901 640 698 00014
          <br />
          Contact :
          <a href="mailto:contact@projetcohesion.info"
            >contact@projetcohesion.info</a
          >
        </p>
      </article>
      <article>
        <h3>Directeur de publication</h3>
        <p>
          Matéo Grimaud (Président)
          <br />
          <a href="mailto:presidence@projetcohesion.info"
            >presidence@projetcohesion.info</a
          >
        </p>
      </article>
      <article>
        <h3>Prestataire d'Hébergement</h3>
        <p>
          Pour pci.leria-etud.univ-angers.fr
          <br />
          Laboratoire d'Etudes et de Recherche en Informatique d'Angers (LERIA)
          <br />
          2 Boulevard de Lavoisier
          <br />
          49100 Angers, France
        </p>
      </article>
    </div>
    <article>
      <h3>Traitement des Données Personnelles</h3>
      <p>
        Responsable du fichier des données : Louis Euvrard (Responsable Projets)
        <br/>
        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 relative
        à l'informatique, aux fichiers et aux libertés, l’Utilisateur dispose
        d’un droit d’accès, de modification et de suppression des informations
        collectées par PC[i]. Pour exercer ce droit, il reviendra à
        l’Utilisateur d’envoyer un message à l’adresse suivante : 
        <a href="mailto:contact@projetcohesion.info">contact@projetcohesion.info</a>
      </p>
    </article>
    <article>
      <h3>Information sur l'association</h3>
	  <p>
      <label> Nom exact : </label> <em> Projets et Cohésion en Informatique </em> <br/>
	  <label> N° SIREN : </label> <em> 901640698 </em> <br/>
	  <label> N° SIRET : </label> <em> 901 640 698 00014 </em> <br/>
	  <label> N° RNA : </label> <em> W491019959 </em> <br/>
	  <label> Code APE : </label> <em> 94.99Z </em> Autres organisations fonctionnant par adhésion volontaire <br/>
	  <a href="https://journal-officiel-datadila.opendatasoft.com/api/v2/catalog/datasets/jo_associations/records?select=%2A&where=numero_rna%20like%20%22W491019959%22&limit=10&offset=0&lang=fr&timezone=UTC"> Déclaration au journal officiel des associations (json) </a> <br/>
	  <a href="https://entreprise.data.gouv.fr/api/rna/v1/id/W491019959"> Statut actuel auprès du gouvernement (json) </a> <br/>
	  </p>
    </article>
  </section>
</template>

<style>
section {
  margin: auto;
  width: clamp(65%, 35rem, Calc(100% - 20px));
}

.sous-titre {
  text-align: center;
  font-style: italic;
  color: orange;
}

.flex {
  display: grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2em;
  margin-top: 10em;
}
</style>
