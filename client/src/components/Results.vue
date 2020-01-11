<template>
<div id="list" class="column">
<h1>Überschrift Result Test</h1>




<FriseurAnzeige v-bind:friseurs="friseurs"></FriseurAnzeige>

</div>

</template>

<script>

import FriseurAnzeige from "./FriseurAnzeige";

export default {

   components: {

       'FriseurAnzeige': FriseurAnzeige

   },
     
    data() {
        return {

            friseurs: [
{name: 'Asiafriseur', adresse: 'AAASIEEEN'},
{name: 'Ostfriseur', adresse: 'slaveländle'}

            ]

        }
    }
    
}
</script>

<style>
#app {
  height: 100%;
  padding-top: 0px;
  text-align: center;
}
</style>