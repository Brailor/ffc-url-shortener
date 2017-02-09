const express = require("express");
var HashTable = require('hashtable');
var hashtable = new HashTable();
var base58 = require("./base58.js");
var URL = require("./url.js");

const app = express();
var counter = 10000;

app.set("views", __dirname + "/public");
app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/new/*', (req, res) => {
    var url = req.originalUrl.slice(5).toLocaleLowerCase();
    console.log(url);
    if(URL.isURL(url)){
        counter++;
        var key = base58.encode(counter);
        hashtable.put(key, {value : url});
        var respond = {
            long_url : url,
            short_url : "https://" + req.hostname + "/" + key
        };
        res.render('response', {long : respond.long_url, short : respond.short_url});
    }
    else{
        res.end('This is not a valid url :(.');
    }
    
});

app.get('/:key', (req, res) => {
   var key = req.params.key;
   if(hashtable.get(key)){
       res.redirect(hashtable.get(key).value);
   }
   else{
       res.send('Wrong url key!');
   }
});

app.listen(8080, () => {
    console.log('Server running correctly!');
});


