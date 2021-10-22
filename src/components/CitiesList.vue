<template>
<div class="=test">
   <City :all="cities"/>
</div>
  <!-- <div class="hello"> 
   <p>Ville: {{name}}</p>
   <p>Météo: {{weather}}</p>
   <p>Température: {{temperature}}</p>
   <p>Date: {{updatedAt}}</p>
  </div>  -->
  <!-- 2 - Modifiez ensuite le template du composant afin d'afficher les informations présentes dans l'objet data. -->


</template>
<script>
import City from '@/components/City';
export default {
  name: 'CitiesList',
  components: {City},
  
data(){
  return {
    cities: [
      {
        id: 1,
        name: 'Ville 1',
        weather: 'Ensoleillé',
        temperature: 22.0,
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Ville 2',
        weather: 'Peu nuageux',
        temperature: 19.5,
        updatedAt: new Date()
      }
    ]
  }
}
  // 1 - 
  //  data() {
  //     return {
  //         alldata : {
  //       name: 'Ma ville', // nom de la ville
  //       weather: 'Peu nuageux', // descriptif météo 
  //       temperature: 20.55, // température en °C
  //       updatedAt: new Date(), // date de dernière mise à jour
  //         }
  //     }
  //   }
    // 1 - Dans ce composant. définissez comme data l'objet Javascript 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
