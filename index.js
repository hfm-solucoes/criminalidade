var app = require('./Config/custom-express')();

app.listen('21297', function(){
    console.log('Servidor rodando na porta 21297');
});

