<template>
<div class="=test">
    <h1> Cities </h1>
    <div id="test">
    {{ cities }}
    </div>
   <City  v-for="city in cities" :key="city.id" :name="city.name" :weather="city.weather" :temperature="city.temperature" :date="date" class="hello"/>
   <!-- boucle for pour l'affichage des elements city DANS CitiesList-->
</div>

</template>
<script>
import City from '@/components/City';
import axios from 'axios';

export default {
  name: 'CitiesList',
  components: {City},
  
data(){
  return {
    cities: [], 
    // le [] tableau vide =  "list": [info - info - etc]
  };
},

mounted(){
  axios
  .get("https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=ad97e2e41ec990094751600ac5203136")
  .then(response => (this.cities = response.data.list))
}
}

</script>


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