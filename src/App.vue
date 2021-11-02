<template>

  <div id="logoTitre">
    <img class="meteo" alt="logo météo" src="./assets/meteo.png">
    <h1>Ville et Météo</h1>
  </div>

  <nav>
    <router-link to='/Cities'><h3>Villes</h3></router-link>
    <br>
    <router-link to='/'><h3>Accueil</h3></router-link>
  </nav>
  
  <router-view class="container" /> 
  <!-- router-view = la partie qui est uniquement rechargée lors d'une navigation entre les "pages" -->
</template>

<script>
import './style/style.css'

export default {
  name: 'App', 
}
</script>