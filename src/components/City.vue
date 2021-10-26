<template>
  <!-- <div class="hello" v-for="element in all" :key="element"> -> cette méthode fait que la boucle for dans le City-->
  <div class="hello">
      <p>Id: {{id}}</p>
      <p>Ville: {{name}}</p>
      <p>Coordonnées: {{coord}}</p>
      <!-- <p>Météo: {{weather}}</p> -->
      <!-- <p>Température: {{temperature}}</p> -->
  </div>
</template>

<script>

export default {
    name: 'City',
    // props: ['name', 'weather', 'temperature', 'updatedAt']
    // props: ['all'], // 3 - Le composant HelloWorld passe les données de data au composant City via des props.
    props: ['cities', 'id', 'name', 'coord',],

}
</script>

<style scoped></style>