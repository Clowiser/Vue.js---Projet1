<template>
  <!-- <div class="hello" v-for="element in all" :key="element"> -> cette méthode fait que la boucle for dans le City-->

  <div class="hello">
      <!-- <p>Id: {{id}}</p> -->
      <h3>{{name}}</h3>
      <h4>Coordonnées:</h4>
        <p>Latitude: {{coord.lat}}</p>
        <p>Longitude: {{coord.lon}}</p>
        <p>Température: {{main.temp}}</p>
        <!-- <p>Température ressentie: {{main.feels_like}}</p>
        <p>Température minumum: {{main.temp_min}}</p>
        <p>Température max: {{main.temp_max}}</p>
        <p>Pression: {{main.pressure}}</p> -->
        <p>Humidité: {{main.humidity}}</p>
        <p>Date: {{formatage}}</p>
      <h4>Météo: </h4>
        <p>Description: {{description}}</p>
        <p>Etat du ciel: {{main2}}</p>
      <br>
  </div>
</template>

<script>
import {format} from 'timeago.js';

export default {
    name: 'City',
    props: ['cities', 'id', 'name', 'coord', 'main', 'date', 'description', 'main2' ],
    // les props sont un moyen de transmettre des informations d’un composant parent à un composant enfant.

    computed: {
      formatage(){
        return format(this.date);
      }
    }

}
</script>