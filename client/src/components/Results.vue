<template>
<div id="list" class="column">
<h1>Überschrift Result Test</h1>




<FriseurAnzeige v-bind:friseurs="friseurs"></FriseurAnzeige>

</div>

</template>

<script>

import FriseurAnzeige from "./FriseurAnzeige";
import PostService from "../services/PostService"

export default {

   components: {

       'FriseurAnzeige': FriseurAnzeige

   },
     
    data() {
        return {
            friseurs: [
//{id:1, name: 'Asiafriseur', adresse: 'AAASIEEEN', email: 'asd', telefon: '0711/321654987', website: 'asd', parkplaetze: 2, montag: '10-12', dienstag: '', mittwoch: '', donnerstag: '', freitag: '', samstag: '', sonntag: ''},
//{id:2, name: 'Ostfriseur', adresse: 'slaveländle', email: 'asd', telefon: '0711/321654987', website: 'asd', parkplaetze: 2, montag: '10-12', dienstag: '', mittwoch: '', donnerstag: '', freitag: '', samstag: '', sonntag: ''}
            ]

        }
    },
    mounted(){
        
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