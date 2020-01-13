<template>
  <div id="list" class="container-fluid padding text-white">
    <div class="row text-center padding">
      <div class="col-12">
        <a @click="setSearch" href="#" class="previous" id="suchButton">&laquo; Zurück zur Suche</a>
      </div>
      <div id="parameter" class="col-xs-12 col-sm-4 col-md-3 text-left">
        <div>
          <input type="checkbox" id="mSchnitt" v-model="maennerSchnitt" />
          <label for="checkbox">Männerschnitt</label>
          <br />

          <input type="checkbox" id="mWaesche" v-model="männerWaesche" />
          <label for="checkbox">Männerhaarwäsche</label>
          <br />

          <input type="checkbox" id="dSchnitt" v-model="damenSchnitt" />
          <label for="checkbox">Damenschnitt</label>
          <br />

          <input type="checkbox" id="dFaerben" v-model="damenFaerben" />
          <label for="checkbox">Damen Färben</label>
          <br />

          <label>
            Sortiert nach
            <select>
              <option value="?">Bewertung</option>
              <option value="?">Preis aufsteigend</option>
              <option value="?">Preis absteigend</option>
              <option value="?">Entfernung</option>
            </select>
          </label>
        </div>
      </div>

      <div class="col-xs-12 col-sm-8 col-md-9">
        <div class="friseure-container">
          <div class="friseur">
            <article
              v-for="friseur in friseure"
              v-bind:key="friseur._id"
              @click="friseur.show = !friseur.show"
              v-show="checkOutput(friseur) && checkAngebot(friseur)"
            >
              <h3 @click="setDetailansicht(); setidSpeicher(friseur);">
                <a title>{{ friseur.Name }}</a>
              </h3>
              <img src alt />
              <p>{{ friseur.Adresse }}</p>
              <p>{{ friseur.Telefon}}</p>
              <p v-show="friseur.show">{{ friseur.Email}}</p>
              <p v-show="friseur.show">{{ friseur.Website}}</p>
              <hr class="bg-white" />
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";

export default {
  name: "results",
  data() {
    return {
      friseure: [],
      search: "",
      maennerSchnitt: false,
      männerWaesche: false,
      damenSchnitt: false,
      damenFaerben: false
    };
  },
  mounted() {
    this.getFriseure();
  },
  methods: {
    async getFriseure() {
      const response = await PostService.fetchResults();
      this.friseure = response.data.friseure;
    },

    checkOutput: function(friseur) {
      var input = new RegExp(this.$store.getters.ort, "i");
      var adresse = friseur.Adresse;
      var name = friseur.Name;
      if (input.test(adresse) || input.test(name)) {
        return true;
      }

      return false;
    },

    checkAngebot: function(friseur) {
      if (this.maennerSchnitt == true && friseur.mancut == null) {
        return false;
      }

      if (this.männerWaesche == true && friseur.manwash == null) {
        return false;
      }

      if (this.damenSchnitt == true && friseur.womancut == null) {
        return false;
      }

      if (this.damenFaerben == true && friseur.womancol == null) {
        return false;
      }

      return true;
    },

    setDetailansicht: function() {
      this.$store.state.componentStateEingeloggt = "DetailsAnsicht";
    },

    setidSpeicher: function(friseur) {
      this.$store.state.idSpeicher = friseur._id;
    },

    setResults: function() {
      this.$store.state.componentStateEingeloggt = "Results";
    },

    setSearch: function() {
      this.$store.state.componentStateEingeloggt = "Suchfeld";
    }
  }
};
</script>

<style>
#list {
  background-color: hsla(0, 0%, 50%, 0.5);
}

#suchButton {
  text-align: right;
  color: rgb(3, 3, 3);
  font-weight: bold;
  float: right;
}

article {
  text-align: center;
  display: block;
}

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