<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn color="white" text rounded>
        <RouterLink to="/"
          ><strong style="color: #618eff">Home</strong></RouterLink
        ></v-btn
      >
      <v-btn color="white" text rounded>
        <RouterLink to="/apropos"
          ><strong style="color: #618eff">À propos</strong></RouterLink
        >
      </v-btn>
      <v-btn color="white" text rounded>
        <RouterLink to="/contact"
          ><strong style="color: #618eff">Contact</strong></RouterLink
        >
      </v-btn>
      <v-btn color="white" text rounded>
        <RouterLink to="/mentions"
          ><strong style="color: #618eff">Mentions légales</strong></RouterLink
        >
      </v-btn>
      <br />
      <v-col cols="12">
        &copy; {{ new Date().getFullYear() }} —
        <RouterLink to="/"
          ><strong style="color: #618eff">
            Projet et Cohésion en Informatique
          </strong></RouterLink
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<style>
v-footer {
  position: fixed;
  text-align: center;
  width: 100%;
  bottom: 0;

  background-color: #0c141ce0;
}

v-btn {
  margin-right: 2em;
}
</style>