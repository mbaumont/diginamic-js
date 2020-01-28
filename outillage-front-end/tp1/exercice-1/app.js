var express = require('express');
var router = express.Router();
var ejs = require("ejs");

var app = express();
var noms = ["Omer","Marge","Bart","Lisa","Maggie"];
app.listen(1337, function () { 
console.log("Le serveur écoute sur le port 1337") });
router.get(['/', '/index'], function (req, res) { 
    res.render('index.ejs', { name: noms });
    res.end(); });
    
app.use(router);
router.get('/profile/:name', function (req, res) { 
    res.render('profile.ejs', { name:req.params.name});
    res.end(); });



