<template>
    <div id="eingeloggt">


<h1> EINGELOGGT! </h1>
     
        <component v-bind:is="ladeKomponente"></component>
        

    </div>

</template>

<script>

import Suchfeld from "./Suchfeld";
import Results from "./Results";



export default {

    components: {
       Suchfeld: Suchfeld,
       Results: Results
        
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