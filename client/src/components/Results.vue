<template>
<div id="list" class="container-fluid padding text-white">

    <div class="friseure-container">
        <div class="friseur">
        <article v-for="friseur in friseure"
            v-bind:key="friseur._id" @click="friseur.show = !friseur.show" v-show="checkOutput(friseur)">
        
           
            <h3 @click="setDetailansicht(); setidSpeicher(friseur);"><a  title="">{{ friseur.Name }}</a></h3>
			<img src="" alt="" />
			<p>{{ friseur.Adresse }}</p>
			<p>{{ friseur.Telefon}}</p>
            <p v-show="friseur.show">{{ friseur.Email}}</p>
			<p v-show="friseur.show">{{ friseur.Website}}</p>
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
            friseure: []

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

},

setDetailansicht: function(){
  
      this.$store.state.componentStateEingeloggt = 'DetailsAnsicht';

    },

setidSpeicher: function(friseur){
  
      this.$store.state.idSpeicher = friseur._id;


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