<template>
    <div id ="suchfeld">


<h1> SUCHFELD! </h1>

<button @click="setResults">Results</button>
     
<!-- Load icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- The form -->
<form class="example" action="action_page.php">
  <input type="text" placeholder="Search.." name="search">
  <button type="submit" @click="setResults"><i class="fa fa-search"></i></button>
</form>
        

    </div>

</template>

<script>





export default {

    components: {

        
       
        
    },
    name: 'suchfeld',
    data () {
        return {

             
            
   
    }
  },

  methods: {
   

    setResult: function() {
      this.$HomeEingeloggt.data.ladeKomponente = "Results";
    },
   

  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

/* Style the search field */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}
 

</style>