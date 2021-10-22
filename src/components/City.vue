<template>
  <div class="hello" v-for="element in all" :key="element">
    <p>Id : {{element.id}}</p>
    <p>Ville: {{element.name}}</p>
    <p>Météo: {{element.weather}}</p>
    <p>Température: {{element.temperature}}</p>

    <p> Date: {{element.updatedAt.toLocaleString()}}</p>
    <p> Date: {{ formatage }}</p> <!-- 4 - Ajoutez la librairie timeago.js avec format à votre projet avec NPM pour afficher la valeur de updatedAt avec un temps relatif. -->
    <!-- 5 -v-for : Bouclez sur les nouvelles données pour appeler autant de fois le composant City qu'il y a d'objets dans le nouveau data de CitiesList. -->
      
  </div>
</template>

<script>
import {format} from 'timeago.js'; // 4 - Ajoutez la librairie timeago.js avec format à votre projet avec NPM pour afficher la valeur de updatedAt avec un temps relatif.

export default {
    name: 'City',
    // props: ['name', 'weather', 'temperature', 'updatedAt']
    props: ['all'], // 3 - Le composant HelloWorld passe les données de data au composant City via des props.

computed : {
  formatage(){
    return format(this.all.updatedAt) // 4 - Ajoutez la librairie timeago.js avec format à votre projet avec NPM pour afficher la valeur de updatedAt avec un temps relatif.
  }
}
}

</script>

<style scoped></style>