<template>
    <div>
        <div class="container-fluid padding border bg-light">
		
            <div class="row justify-content-center text-center">
			    <div>
				    <section class="loginuser">
                    <h5>Anmelden</h5>

					<form @submit.prevent="login">
						<input id="emaillogin" v-model="emaillogin" type="email" name="emaillogin" placeholder="E-Mail"><br/>
						<input id="passlogin" v-model="passlogin" type="password" name="passlogin" placeholder="Passwort"><br/>
						<button class="btn btn-primary btn-block">Anmelden</button>
						<a href="" data-toggle="modal" data-target="#registrierung">Neu hier?</a><br/> <!-- Definiert in HomeNichtEingeloggt -->
						<a href="" data-toggle="modal" data-target="#pwVergessen">Passwort vergessen?</a>
						
						<!-- Nachfolgendes div enthält das Modal bzw. "Popup" für den Link Passwort vergessen -->
						<div class="modal fade" id="pwVergessen" tabindex="-1" role="dialog" aria-labelledby="pwVergessenLabel" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="pwVergessenLabel">Passwort vergessen?</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<section class="insertuser">
											<form action="#">
												<div class="col-12">
													<input class="form-control" id="email" type="email" name="email" placeholder="E-Mail-Adresse eingeben" required/><br/>
												</div>
												<div class="col-12">
													<button type="submit" class="btn btn-primary btn-block">Bestätigen</button>
												</div>
											</form>
										</section>
									</div>
									<div class="modal-footer justify-content-center">
										<a href="" data-dismiss="modal">Zurück</a> 
									</div>
								</div>
							</div>
						</div> <!-- Modal Ende -->
					</form>
				    </section>
			    </div>
								<!-- Nachfolgendes div enthält das Modal bzw. "Popup" für den Button Registrieren -->
				<div class="modal fade" id="badlogin" tabindex="-1" role="dialog" aria-labelledby="badlogin" aria-hidden="true">
				<div class="modal-dialog modal-dialog-scrollable" role="document">
					<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="badlogin">Login fehlgeschlagen</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid padding">
						<div class="row justify-content-center text-center">
							<p>Eingegebene Email oder Passwort ist falsch</p>
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
        </div>
    </div>
</template>

<script>
import PostService from "../services/PostService"
import SignIn from "./SignIn"

export default {
	name: 'Login',
	data() {
		return {
			emaillogin: '',
			passlogin: ''
		}
	},
	methods:{
      async login(){
        await PostService.login({
			emaillogin: this.emaillogin,
			passlogin: this.passlogin
		}).then(res =>{
			console.log("Login erfolgreich")
			this.$store.state.eingeloggt = true
			//Navigiere zu HomeEingeloggt
		}).catch(err => {
			console.log("Login nicht erfolgreich")
			this.emaillogin= '',
			this.passlogin='',
			$('#badlogin').modal('show');
		})
	  },
	  setSignIn: function() {
	  this.$store.state.componentState = "SignIn";
	  },
	}
}
</script>

<style>

</style>