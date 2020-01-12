<template>
    <div id="eingeloggt">
		<button id="btnMyProfil" class="btn btn-secondary mr-sm-2" @click="setMyProfile">Mein Profil</button>
		<button id="btnLogout" @click="logout" class="btn btn-secondary">Ausloggen</button>
    </div>

</template>

<script>

import MyProfile from "./MyProfile";
import Suchfeld from "./Suchfeld";
import Results from "./Results";
import PostService from '../services/PostService';



export default {

    components: {
       
        'MyProfile': MyProfile,
        'Suchfeld': Suchfeld,
        'Results': Results
        
    },
    name: 'eingeloggt',
    data () {
        return {

          ladeKomponente: 'Suchfeld',
         
            
   
    };
  },
  methods: {

    setMyProfile: function() {
      this.$store.state.componentStateEingeloggt = "MyProfile";
    },

    setResults: function() {
        this.$store.state.componentStateEingeloggt = 'Results';
      },
    
    async logout(){
      await PostService.logout()
        this.$store.state.eingeloggt = false

    }

   

  }
}
</script>

<style>

 


</style>