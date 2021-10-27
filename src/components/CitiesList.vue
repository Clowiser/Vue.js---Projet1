<template>
<div>
    <h1> Cities </h1>

    <section v-if="errored">
      <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
      <p>{{ errored }}</p>
    </section>

    <section v-else>
      <div v-if="loading">Chargement...</div>

      <City  v-for="city in cities" :key="city.id" :id="city.id" :name="city.name" :coord="city.coord" :lat="city.coord.lat" :main="city.main" :temp="city.main.temp" :date="city.dt*1000" :description="city.weather.map(({description}) => description).join('')" :main2="city.weather.map(({main}) => main).join('')" class="hello"/> 
      
    </section>
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
      loading: false, // dans temps de chargement, affiche message
      errored: null,
    };
  },

  mounted(){
    this.loading = true;
    axios 
    // rappel promesse avec Opération en cours (non terminée) ;
    // Opération terminée avec succès (promesse résolue) ;
    // Opération terminée ou plus exactement stoppée après un échec (promesse rejetée).
      .get("https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=ad97e2e41ec990094751600ac5203136")
      .then(response => {
        this.cities = response.data.list;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.errored = error; // si on efface des numéros dans notre API, cela affiche bien le message d'erreur
    })
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