// fichier de configuration du routeur : on code la logique du router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import CitiesList from '../components/CitiesList'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/Home',
        component: Home
        },
        {
        path: '/',
        redirect: '/Home' 
        // Ajout d'une redirection
        },
        {
        path: '/Cities',
        component: CitiesList
        // Une fois le router installé et prêt à l'emploi, nous voulons maintenant déclarer une route `/cities'` affichant la liste des villes.
        // Déclarez votre tableau de routes dans le fichier `index.js` du répertoire `router`, en faisant référence au composant `CitiesList`.
        }
    ]
})

export default router