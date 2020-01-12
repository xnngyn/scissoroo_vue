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
			<p>Montag: {{ friseur.Montag}}</p>
			<p>Dienstag: {{ friseur.Dienstag}}</p>
			<p>Mittwoch: {{ friseur.Mittwoch}}</p>
			<p>Donnerstag: {{ friseur.Donnerstag}}</p>
			<p>Freitag: {{ friseur.Freitag}}</p>
			<p>Samstag: {{ friseur.Samstag}}</p>
			<p>Sonntag: {{ friseur.Sonntag}}</p>
            <p>show: {{ friseur.show }} </p>
            <hr>
        </article>
        </div>
    </div>


</div>

</template>

<script>


import PostService from "../services/PostService"

export default {

   
    name: 'results', 
    data() {
        return {
            friseure: [],
            

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