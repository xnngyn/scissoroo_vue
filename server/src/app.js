const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var bcrypt = require('bcrypt')
var User = require('../models/user')
var Provider = require('../models/provider')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) =>{
    res.send({
        message: 'Welcome to Scissoroo Backend'
    })
});

app.get('/results', (req, res) =>{
    Provider.find({}, function(err, result){
        if(err)
            res.send(err)
        res.json(result)
});

app.post('/register', (req, res) => {
    //Get Form Values
    var fname = req.body.fname;
    var lname = req.body.lname;
    var bdate = req.body.gdatum;
    var sex = req.body.sex;
    var strasse = req.body.strasse;
    var hausnr = req.body.hausnr;
    var plz = req.body.plz;
    var stadt = req.body.stadt;
    var email = req.body.email;
    var pass = req.body.pass;

    var newUser = new User({
        fullname: fname,
        lastname: lname,
        birthdate: bdate,
        sex: sex,
        strasse: strasse,
        hausnr: hausnr,
        plz: plz,
        stadt: stadt,
        email: email,
        pass: pass
    });

//       var salt = 10;

//		bcrypt.hash(newUser.pass, salt, function(err,hash) {
//			if(err) throw err;

        //Set Hashed Password
//			newUser.pass = hash;

        // create new User
       newUser.save(function(err, user){
            if(err){
                console.log(err)
              } else {
                res.send({
                    success: true,
                    message: 'User registrated successfully!'
                })
            }
        });
//        });
})

// Mongo DB Database
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
console.log("Connection Succeeded");
});

app.listen(process.env.PORT || 5000)
