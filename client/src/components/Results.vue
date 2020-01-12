<template>
<div id="list" class="container-fluid padding text-white">

    <div class="friseure-container">
        <div class="friseur">
        <article v-for="friseur in friseure"
            v-bind:key="friseur._id" @click="friseur.show = !friseur.show" v-show="checkOutput(friseur)">
        
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
            <hr class="bg-white">
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
            search: ''

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

        checkOutput: function(friseur) {
            var input = new RegExp(this.$store.getters.ort)
            var adresse = friseur.Adresse
            var name = friseur.Name
            if(input.test(adresse) || input.test(name)) {
            return true;

        }

return false;

}
    }
    
}
</script>

<style>

#list{
    background-color: hsla(0,0%,50%,0.5);
}


article {
    text-align: center;
    display: block;


}

</style>