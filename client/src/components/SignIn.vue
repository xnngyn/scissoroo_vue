<template>
    <div>
        <div class="container-fluid padding">
		
            <div class="row justify-content-center text-center">
			    <div>
				    <section class="loginuser">
                    <h5>Anmelden</h5>

					<form action="/users/login" method="post">
						<input id="emaillogin" type="email" name="emaillogin" placeholder="E-Mail"><br/>
						<input id="passlogin" type="password" name="passlogin" placeholder="Passwort"><br/>
						<button type="submit" class="btn btn-primary btn-block">Anmelden</button>
						<a href="" data-toggle="modal" data-target="#registrieren">Neu hier?</a><br/> <!-- Definiert in HomeNichtEingeloggt -->
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
											<form action="/insertuser" method="post">
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
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>