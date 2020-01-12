<template>
<div id="list" class="container">
    <hr>
    <div class="friseure-container">
        <div class="friseur">
        <article v-for="friseur in friseure"
            v-bind:key="friseur._id" @click="friseur.show = !friseur.show">
        
            <h3><a  title="">{{ friseur.Name }}</a></h3>
			<img src="" alt="" />
			<p>{{ friseur.Adresse }}</p>
			<p>{{ friseur.Email}}</p>
			<p>{{ friseur.Telefon}}</p>
			<p v-show="friseur.show">Montag: {{ friseur.Montag}}</p>
			<p v-show="friseur.show">Dienstag: {{ friseur.Dienstag}}</p>
			<p v-show="friseur.show">Mittwoch: {{ friseur.Mittwoch}}</p>
			<p v-show="friseur.show">Donnerstag: {{ friseur.Donnerstag}}</p>
			<p v-show="friseur.show">Freitag: {{ friseur.Freitag}}</p>
			<p v-show="friseur.show">Samstag: {{ friseur.Samstag}}</p>
			<p v-show="friseur.show">Sonntag: {{ friseur.Sonntag}}</p>
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
        },

        async getFilter(){
            const response = await PostService.filter()
            this.friseure = response.data.friseure
        }
    }
    
}
</script>

<style>


article {
    text-align: center;
    display: block;


}

</style>