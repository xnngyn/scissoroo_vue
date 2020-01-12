<template>
  <div id="app">

 

    <nav class="navbar navbar-light bg-light">
		  <a class="navbar-brand"><div @click="setSuchfeld(); setHomeText();"><img src="https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Scissoroo_Logo.jpg" width="100" height="100" alt=""> </div></a> <!--../Bilder/Scissoroo_Logo.jpg-->
			<button id="home" @click="setSuchfeld(); setHomeText();">Home</button>
      <ButtonsNichtEingeloggt v-if="!eingeloggt"></ButtonsNichtEingeloggt>
      <ButtonsEingeloggt v-else-if="eingeloggt"></ButtonsEingeloggt>
      
      
      </nav>	

      <div id="hauptbody"> 
        <HomeNichtEingeloggt v-if="!this.$store.state.eingeloggt"></HomeNichtEingeloggt>
        <HomeEingeloggt v-else-if="this.$store.state.eingeloggt"></HomeEingeloggt>
    </div>   

      <footer>
			  <div class="container-fluid padding">
		    	<div class="row text-center">


            <div class="col-12">
					    <h6>&copy; Scissoroo</h6>
				    </div>
          </div>	
        </div>  				
			</footer>
  
   
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

      eingeloggt:false
      
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




html{
	height: 140%;
  background-color: grey;
	background-image: url(https://raw.githubusercontent.com/xnngyn/Scissoroo/master/public/images/Home_Hintergrund.jpg);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
}





</style>
