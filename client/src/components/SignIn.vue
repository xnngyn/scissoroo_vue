<template>
    <div>
        <div class="container-fluid padding">
		
            <div class="row justify-content-center text-center">
			    <div>
				    <section class="loginuser">
                    <h5>Anmelden</h5>

					<form action="/users/login" method="post">
						<input id="emaillogin" type="text" name="emaillogin" placeholder="E-Mail"><br/>
						<input id="passlogin" type="password" name="passlogin" placeholder="Passwort"><br/>
						<button type="submit" class="btn btn-primary btn-block">Anmelden</button>
						<a href="signup">Neu hier?</a><br/>
						<a href="forgot">Passwort vergessen?</a>
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