var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


module.exports = function(){
    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressValidator());

    //consign({cwd: 'server-criminalidade'}) Configuração necessaria para o Kinghost
    consign()
        .include('Controllers')
        .then('Persistencia')
        .into(app);

    return app;
}