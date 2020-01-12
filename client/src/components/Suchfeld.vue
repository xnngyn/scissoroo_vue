<template>
  <div id="suchfeld" class="container fluid padding">
    <!-- Load icon library -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="row justify-content-center text-center">
      <div class="col-6">
        <!-- The form -->
        <form class="example" action="action_page.php">
          <input type="text" placeholder="Search.." name="search" v-model="$store.state.ort"/>
          <button type="submit" @click="setResults">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>



export default {

  
  name: "suchfeld",
  data() {
    return {

      
    };
  },

  methods: {
    setResults: function() {
      this.$store.state.componentStateEingeloggt = "Results";
    },

  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* Style the search field */
form.example input[type="text"] {
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
  background: #2196f3;
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