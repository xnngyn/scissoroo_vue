<template>
    <div id="eingeloggt">

        <component v-bind:is="$store.getters.componentStateEingeloggt"></component>

    </div>

</template>

<script>

import MyProfile from "./MyProfile";
import Suchfeld from "./Suchfeld";
import Results from "./Results";
import DetailsAnsicht from "./DetailsAnsicht";


export default {

    components: {
        'MyProfile': MyProfile,
        'Suchfeld': Suchfeld,
        'Results': Results,
        'DetailsAnsicht': DetailsAnsicht
        
    },
    name: 'eingeloggt',
    data () {
        return {

          ladeKomponente: 'Suchfeld',
         
            
   
    };
  },
  methods: {

    //Session Authentication 

    setMyProfile: function() {
      this.$store.state.componentStateEingeloggt = "MyProfile";
    },

    setResults: function() {
        this.$store.state.componentStateEingeloggt = 'Results';
      },
    
    logout: function(){
        this.$store.state.eingeloggt = false

    }

  }
}
</script>

<style>

 


</style>