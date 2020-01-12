<template>
<div>

    <div id="WICHTIG">
    <component id="mittelKomponente" v-bind:is="$store.getters.componentState"></component>
    </div>

  </div>
</template>

<script>
import HomeText from "./HomeText";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MyProfile from "./MyProfile";
import Results from "./Results";
import PostService from "../services/PostService"

export default {
  components: {
    'HomeText': HomeText,
    'SignIn': SignIn,
    'SignUp': SignUp,
    'MyProfile': MyProfile,
    'Results': Results
  },
  name: "buttons",
  data() {
    return {
      component: "HomeText",
      sex: '',
      fname: '',
      lname: '',
      bdate: '',
      strasse: '',
      hausnr: '',
      plz: '',
      stadt: '',
      email: '',
      pass: ''
    };
  },
  methods: {
    //   setSignUp: function() {
    //     this.$store.state.componentState = "SignUp";
    //   },

    setSignIn: function() {
      this.$store.state.componentState = "SignIn";
      
      document.getElementById("btnSignIn").disabled = true; //Setzt den Anmelden-Button inaktiv, da die Komponente bereits geladen wurde
      //document.getElementById("btnSignIn").pressed = false;     not working :-(
    },

    setResults: function() {
      this.$store.state.componentState = "Results";

      //Reaktivierung des Anmelden-Buttons
      if(document.getElementById("btnSignIn").disabled == true){
        document.getElementById("btnSignIn").disabled = false;
      }
    },

    checkForm: function() {
      //to do?
    },
    async addUser() {
      await PostService.addUser({
          sex: this.sex,
          fname: this.fname,
          lname: this.lname,
          bdate: this.bdate,
          strasse: this.strasse,
          hausnr: this.hausnr,
          plz: this.plz,
          stadt: this.stadt,
          email: this.email,
          pass: this.pass,
        }).then((res)=>{
            //hier kommt die Registrierungsbestätigung
            this.sex = '',
            this.fname= '',
            this.lname= '',
            this.bdate= '',
            this.strasse= '',
            this.hausnr= '',
            this.plz= '',
            this.stadt= '',
            this.email= '',
            this.pass= '',
            //Schließe Form Modal
            $('#registrierung').modal('hide');
            //start neue Modal
            $('#erfolgreg').modal('show');
            

        })
        
      }    
  },

  
};
</script>

<style>

.WICHTIG{
  display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}




</style>