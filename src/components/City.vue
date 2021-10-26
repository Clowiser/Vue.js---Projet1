<template>
  <!-- <div class="hello" v-for="element in all" :key="element"> -> cette méthode fait que la boucle for dans le City-->

  <div class="hello">
      <!-- <p>Id: {{id}}</p> -->
      <p><strong>{{name}}</strong> </p>
      <p>Coordonnées:</p>
        <p>Latitidue: {{coord.lat}}</p>
        <p>Longitude: {{coord.lon}}</p>
      <!-- <p>main:</p> -->
        <p>Température: {{main.temp}}</p>
        <p>Température ressentie: {{main.feels_like}}</p>
        <p>Température minumum: {{main.temp_min}}</p>
        <p>Température max: {{main.temp_max}}</p>
        <p>Pression: {{main.pressure}}</p>
        <p>Humidité: {{main.humidity}}</p>
        <p>Date: {{formatage}}</p>
      <p>Météo: </p>
        <p>Description: {{description}}</p>
        <p>Etat du ciel: {{main2}}</p>
        <!-- <p>main: {{}}</p> -->
        <!-- <p>Description: {{weather[description].description}}</p> -->
      <!-- <p>Température: {{temperature}}</p> -->
      <br>
  </div>
</template>

<script>
import {format} from 'timeago.js';

export default {
    name: 'City',
    props: ['cities', 'id', 'name', 'coord', 'main', 'date', 'description', 'main2' ],

    computed: {
      formatage(){
        return format(this.date);
      }
    }

}
</script>

<style scoped></style>