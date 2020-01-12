<template>
  <div id="buttons">
    
    <!-- Button trigger modal -->
    <button id="btnSignUp" class="btn btn-secondary mr-sm-2" data-toggle="modal" data-target="#registrierung">Registrierung</button>
    
    <!--  <button class="btn btn-secondary mr-sm-2" @click="setSignUp">Registrierung</button> -->
    <button id="btnSignIn" class="btn btn-secondary" @click="setSignIn">Anmelden</button>
    <button class="btn btn-secondary" @click="setResults">Results</button>

    <component v-bind:is="$store.getters.componentState"></component>

    <!-- Nachfolgendes div enthält das Modal bzw. "Popup" für den Button Registrierung -->
    <div class="modal fade" id="registrierung" tabindex="-1" role="dialog" aria-labelledby="registrierungTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="registrierungTitle">Erzähle uns von dir</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid padding">
              <div class="row justify-content-center text-center">
                <div id="createAcc">
                  <section class="insertuser">
                    <form @submit.prevent="addUser"> 
                      <div class="col-12">
                        <div class="row">
                          <label>Titel</label>
                        </div>
                        <div class="row">
                          <select v-model="sex" id="sex" name="sex">
                            <option value="Female" selected>Frau</option>
                            <option value="Male">Herr</option>
                          </select>
                          <br />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="fname">Vorname</label>
                        </div>

                        <div class="row">
                          <input
                            label="Vorname"
                            class="form-control"
                            id="fname"
                            v-model="fname"
                            name="fname"
                            type="text"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="lname">Nachname</label>
                        </div>
                        <div class="row">
                          <input
                            class="form-control"
                            id="lname"
                            v-model="lname"
                            name="lname"
                            type="text"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="gdatum">Geburtsdatum</label>
                        </div>
                        <div class="row">
                          <input
                            class="form-control"
                            id="gdatum"
                            v-model="bdate"
                            type="date"
                            name="gdatum"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="strasse">Adresse</label>
                        </div>
                        <div>
                          <div class="input-group">
                            <input
                              class="form-control col-9"
                              id="strasse"
                              type="text"
                              v-model="strasse"
                              name="strasse"
                              placeholder="Straße"
                              required
                            />
                            <input
                              class="form-control col-3"
                              id="hausnr"
                              type="text"
                              v-model="hausnr"
                              name="hausnr"
                              placeholder="Nr."
                              required
                            />
                          </div>
                          <hr />
                          <div class="input-group">
                            <input
                              class="form-control col-4"
                              id="plz"
                              type="text"
                              v-model="plz"
                              name="plz"
                              placeholder="PLZ"
                              required
                            />
                            <input
                              class="form-control col-8"
                              id="stadt"
                              v-model="stadt"
                              type="text"
                              name="stadt"
                              placeholder="Stadt"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="email">E-Mail</label>
                        </div>
                        <div class="row">
                          <input class="form-control" id="email" v-model="email" name="email" type="email" required />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <div class="row">
                          <label for="pass">Passwort</label>
                        </div>
                        <div class="row">
                          <input
                            class="form-control"
                            id="pass"
                            v-model="pass"
                            name="pass"
                            type="password"
                            required
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block" data-toggle="modal" data-target="#registrieren" data-dismiss="modal">Registrieren</button>
                        <br />
                        <h6>Durch die Registrierung stimmst du den Nutzungsbestimmungen und der Datenschutzerklärung zu.</h6>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <a href="" @click="setSignIn" data-dismiss="modal">Du hast dich bereits registriert?</a>
          </div>
        </div>
      </div>
    </div> <!-- Modal Ende -->

    <!-- Nachfolgendes div enthält das Modal bzw. "Popup" für den Button Registrieren -->
    <div class="modal fade" id="registrieren" tabindex="-1" role="dialog" aria-labelledby="registrierenTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="registrierenTitle">Bestätigung</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid padding">
              <div class="row justify-content-center text-center">
                <p>Die Registrierung war erfolgreich!</p>
              </div>
            </div>    
          </div>
          <div class="modal-footer justify-content-center">
            <a href="" @click="setSignIn" data-dismiss="modal">Zur Anmeldung</a>
          </div>
        </div>
      </div>
    </div> <!-- Modal Ende -->
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
            this.pass= ''
            

        })
        
      }    
  },
  
};
</script>

<style>
buttons {
  float: right;
}
</style>