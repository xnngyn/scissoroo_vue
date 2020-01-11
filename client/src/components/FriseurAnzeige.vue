<template>
  <div class="Friseure">
   
       
       <ul>
        <li v-for="friseur in friseurs" :key="friseur.id">
           <h2>{{ friseur.name }}</h2>
           <h1>{{ friseur.adresse }} </h1>
           <p> Montag: {{ friseur.montag}} </p>
        </li>

       </ul>
       
       

       



  </div>
</template>

<script>



export default {

   props:['friseurs'],


}
</script>

<style>

</style>