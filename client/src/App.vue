<template>
  <div id="app">

 

    <nav class="navbar navbar-light bg-light">
		  <a class="navbar-brand"><div @click="setSuchfeld(); setHomeText();"><img src="https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Scissoroo_Logo.jpg" width="100" height="100" alt=""> </div></a> <!--../Bilder/Scissoroo_Logo.jpg-->
			<button id="home" @click="setSuchfeld(); setHomeText();">Home</button>
      <ButtonsNichtEingeloggt v-if="!this.$store.state.eingeloggt"></ButtonsNichtEingeloggt>
      <ButtonsEingeloggt v-else-if="this.$store.state.eingeloggt"></ButtonsEingeloggt>
      
      
      </nav>	

      <div> 
        <HomeNichtEingeloggt v-if="!this.$store.state.eingeloggt"></HomeNichtEingeloggt>
        <HomeEingeloggt v-else-if="this.$store.state.eingeloggt"></HomeEingeloggt>
      </div>   

      

      <div class="footer">
        <p>Footer</p>
      </div>
  
   
  </div>
</template>

<script>
import ButtonsNichtEingeloggt from '@/components/ButtonsNichtEingeloggt';
import ButtonsEingeloggt from '@/components/ButtonsEingeloggt';
import HomeNichtEingeloggt from '@/components/HomeNichtEingeloggt';
import HomeEingeloggt from '@/components/HomeEingeloggt';


export default {
  components: {
    'ButtonsNichtEingeloggt': ButtonsNichtEingeloggt,
    'ButtonsEingeloggt': ButtonsEingeloggt,   
    'HomeNichtEingeloggt': HomeNichtEingeloggt,
    'HomeEingeloggt': HomeEingeloggt


  },
  name: 'app',
  data () {
    return {

      eingeloggt:true
      
    }
  },

  methods: {
    
    setHomeText: function() {

      this.$store.state.componentState = 'HomeText';

      //Reaktivierung des Anmelden-Buttons
      if(document.getElementById("btnSignIn").disabled == true){
        document.getElementById("btnSignIn").disabled = false;
      }
    },

    setSuchfeld: function(){
  
      this.$store.state.componentStateEingeloggt = 'Suchfeld';

    }
    
      
    }
  }

</script>

<style>

body {
  background: url('https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Home_Hintergrund.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: rgb(68, 24, 24);
   color: rgb(158, 19, 19);
   text-align: center;
}

</style>
