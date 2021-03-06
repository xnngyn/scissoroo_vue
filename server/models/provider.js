var mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var ProviderSchema = new mongoose.Schema({
    Name:{
        type    : String
    },    
    Adresse:{
        type    : String
    },
    Plz:{
        type    : Number
    },
    Stadt:{
        type    : String
    },
    Email:{
        type    : String
    },
    Telefon:{
        type    : String
    },
    Webseite:{
        type    : String
    },
    Mitarbeiter:{
        type    : Number
    },
    Parkplaetze:{
        type    : Number
    },
    Montag:{
        type    : String
    },
    Dienstag:{
        type    : String
    },
    Mittwoch:{
        type    : String
    },
    Donnerstag:{
        type    : String
    },
    Freitag:{
        type    : String
    },
    Samstag:{
        type    : String
    },
    Sonntag:{
        type    : String
    },
    mancut:{
        type    : Number
    },
    manwash:{
        type    : Number
    },
    womancut:{
        type    : Number
    },
    womancol:{
        type    : Number
    },
}, { collection: 'friseure'});

//fetch data

var Provider = mongoose.model('Provider', ProviderSchema);
module.exports = Provider;