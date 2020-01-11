<template>
  <div class="Friseure">
   
       
       <ul>
        <li v-for="friseur in friseurs" :key="friseur.id">
            {{ friseur.name }}
        </li>

       </ul>
       
       

         <!-- 
             
          {{ friseur.email }}
           {{ friseur.telefon }}
            {{ friseur.website }}
             {{ friseur.mitarbeiter }}
              {{ friseur.parkplaetze }}
               {{ friseur.montag }}
                {{ friseur.dienstag }}
                 {{ friseur.mittwoch }}
                  {{ friseur.donnerstag }}
                   {{ friseur.freitag }}
                    {{ friseur.samstag }}
                     {{ friseur.sonntag }}
                     -->
                     



  </div>
</template>

<script>



export default {

   props:['friseurs'],


}
</script>

<style>

</style>