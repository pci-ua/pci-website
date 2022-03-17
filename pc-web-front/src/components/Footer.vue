<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
    
      <v-btn color="white" text rounded>
        <RouterLink to="/" class="footer-link">Home</RouterLink>
      </v-btn>
      <v-btn color="white" text rounded>
        <RouterLink to="/apropos" class="footer-link">À propos</RouterLink>
      </v-btn>
      <v-btn color="white" text rounded>
        <RouterLink to="/contact" class="footer-link">Contact</RouterLink>
      </v-btn>
      <v-btn color="white" text rounded>
        <RouterLink to="/mentions" class="footer-link">Mentions légales</RouterLink>
      </v-btn>
      
      <br />
      
      <v-col cols="12">
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
