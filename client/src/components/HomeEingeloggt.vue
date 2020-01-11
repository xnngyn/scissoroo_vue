<template>
    <div id="Buttons">


<h1> EINGELOGGT! </h1>
      <!-- Button trigger modal -->
    <button id="btnSignUp" class="btn btn-secondary mr-sm-2" data-toggle="modal" data-target="#registrieren">Registrierung</button>
    
    <!--  <button class="btn btn-secondary mr-sm-2" @click="setSignUp">Registrierung</button> -->
    <button id="btnSignIn" class="btn btn-secondary" @click="setSignIn">Anmelden</button>
    <button class="btn btn-secondary" @click="setResults">Results</button>

        
        

    </div>

</template>

<script>




export default {

    components: {
       
        
    },
    name: 'buttons',
    data () {
        return {
            
            
   
    }
  }
}
</script>

<style>

 


</style>