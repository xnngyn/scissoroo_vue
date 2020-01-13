<template>
    <div>
    <head>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>eCommerce Product Detail</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">

  </head>

  <body>
	
	<div class="container">
		<div class="card">
      <a @click="setResults" href="#" class="previous">&laquo; Zurück zur Suche</a>
      
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title"> {{friseur.Name}} </h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 Bewertungen</span>
						</div>
						<p class="product-description"> {{ friseur.Adresse }} <br> {{ friseur.Telefon }} <br> {{ friseur.Email }} <br> {{ friseur.Website}}</p>
						<h6 class="price">Männerhaarschnitt (ohne Waschen): <span>{{ friseur.mancut }} €</span></h6>
                        <h6 class="price">Männerhaarschnitt (mit Waschen): <span>{{ friseur.manwash }} €</span></h6>
                        <h6 class="price">Damenhaarschnitt (mit Waschen): <span>{{ friseur.womancut }} €</span></h6>
                        <h6 class="price">Damenhaarschnitt mit Make Up: <span>{{ friseur.womancol }} €</span></h6>
						
						<h5 class="colors" >Anzahl Mitarbeiter:
							<!--<span class="size" data-toggle="tooltip" title="small">7</span>-->
                            <span>{{ friseur.Mitarbeiter }}</span>
						</h5>
                        <h5 v-if="fris" class="colors">Parkplätze:
							<!--<span class="size" data-toggle="tooltip" title="small">7</span>-->
                            <span>{{ friseur.Parkplaetze }}</span>
						</h5>
                        <h6>Öffnungszeiten:<br>
							<!--<span class="size" data-toggle="tooltip" title="small">08:00 - 20:00</span>-->
                            <span>Montag: {{ friseur.Montag }}</span><br>
                            <span>Dienstag: {{ friseur.Dienstag }}</span><br>
                            <span>Mittwoch: {{ friseur.Mittwoch }}</span><br>
                            <span>Donnerstag: {{ friseur.Donnerstag }}</span><br>
                            <span>Freitag: {{ friseur.Freitag }}</span><br>
                            <span>Samstag: {{ friseur.Samstag }}</span><br>
                            <span>Sonntag: {{ friseur.Sonntag }}</span><br>
						</h6>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">Termin buchen</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </body>
  </div>
</template>

<script>
import PostService from "../services/PostService"
import Results from "./Results";
export default {
    name: 'Detail',
    data() {
      return{
        friseur: []
      }
    },
    mounted(){
      this.getDetail()
    },
    methods: {
      async getDetail(){
        const resp = await PostService.findFriseur({
          id: this.$store.getters.idSpeicher
        })
        this.friseur = resp.data.friseure
      },
      setResults: function() {
        this.$store.state.componentStateEingeloggt = 'Results';
      }
    },

    components: {
        
        'Results': Results

    }
}
</script>

<style scoped>
    
/*****************globals*************/
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

body {
  font-family: 'open sans';
  overflow-x: hidden; }

img {
  max-width: 100%; }

.previous {
  background-color: #f1f1f1;
  color: black;
  width: 175px;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold; }

.checked, .price span {
  color: #ff9f1a; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0; }

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
  .add-to-cart:hover, .like:hover {
    background: #b36800;
    color: #fff; }

.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9f1a; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

/*# sourceMappingURL=style.css.map */
</style>