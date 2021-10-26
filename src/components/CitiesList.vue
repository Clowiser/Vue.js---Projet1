<template>
<div class="=test">
    <h1> Cities </h1>
   <City  v-for="city in cities" :key="city.id" :id="city.id" :name="city.name" :coord="city.coord" :lat="city.coord.lat" :main="city.main" :temp="city.main.temp" :date="city.dt*1000" :description="city.weather.map(({description}) => description).join('')" :main2="city.weather.map(({main}) => main).join('')" class="hello"/> 
   {{ cities }}
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
    loading: false,
    errors: [],
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