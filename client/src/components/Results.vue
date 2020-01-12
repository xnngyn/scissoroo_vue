<template>
<div id="list" class="container">
    <h1>Friseure in deiner Umgebung Blyat</h1>
    <hr>
    <div class="friseure-container">
        <div class="friseur">
        
        <article v-for="friseur in friseure"
            v-bind:key="friseur._id">
        
            <h3><a  title="">{{ friseur.Name }}</a></h3>
			<img src="" alt="" />
			<p>{{ friseur.Adresse }}</p>
			<p>{{ friseur.Email}}</p>
			<p>{{ friseur.Telefon}}</p>
			<p>{{ friseur.Website}}</p>
			<p>Anzahl Mitarbeiter: {{ friseur.Mitarbeiter}}</p>
			<p>Anzahl Parkplätze: {{ friseur.Parkplaetze}}</p>
			<p>Öffnungszeiten</p>
			<p>Montag: {{ friseur.Montag}}</p>
			<p>Dienstag: {{ friseur.Dienstag}}</p>
			<p>Mittwoch: {{ friseur.Mittwoch}}</p>
			<p>Donnerstag: {{ friseur.Donnerstag}}</p>
			<p>Freitag: {{ friseur.Freitag}}</p>
			<p>Samstag: {{ friseur.Samstag}}</p>
			<p>Sonntag: {{ friseur.Sonntag}}</p>
            <hr>
        </article>
        </div>
    </div>
<FriseurAnzeige v-bind:friseurs="friseurs"></FriseurAnzeige>

</div>

</template>

<script>

import FriseurAnzeige from "./FriseurAnzeige";
import PostService from "../services/PostService"

export default {

   components: {

       'FriseurAnzeige': FriseurAnzeige

   },
    name: 'results', 
    data() {
        return {
            friseure: [
//{id:1, name: 'Asiafriseur', adresse: 'AAASIEEEN', email: 'asd', telefon: '0711/321654987', website: 'asd', parkplaetze: 2, montag: '10-12', dienstag: '', mittwoch: '', donnerstag: '', freitag: '', samstag: '', sonntag: ''},
//{id:2, name: 'Ostfriseur', adresse: 'slaveländle', email: 'asd', telefon: '0711/321654987', website: 'asd', parkplaetze: 2, montag: '10-12', dienstag: '', mittwoch: '', donnerstag: '', freitag: '', samstag: '', sonntag: ''}
            ]

        }
    },
    mounted(){
        this.getFriseure()
    },
    methods: {
        async getFriseure(){
            const response = await PostService.fetchResults()
            this.friseure = response.data.friseure
        }
    }
    
}
</script>

<style>
#app {
  height: 100%;
  padding-top: 0px;
  text-align: center;
}
</style>