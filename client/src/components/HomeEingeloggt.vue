<template>
    <div id="eingeloggt">


<h1> EINGELOGGT! </h1>
     
        <component v-bind:is="ladeKomponente"></component>
        

    </div>

</template>

<script>

import Suchfeld from "./Suchfeld";



export default {

    components: {
       Suchfeld: Suchfeld
        
    },
    name: 'eingeloggt',
    data () {
        return {

            ladeKomponente: 'Suchfeld'
            
   
    }
  }
}
</script>

<style>

 


</style>