var app = require('./Config/custom-express')();

//Porta para o kinghost
//var porta = process.env.PORT_SERVER_CRIMINALIDADE_INDEX;
var porta = '21322';
app.listen(porta, function(){
    console.log('Servidor rodando na porta '+ porta);
});

