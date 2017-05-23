module.exports = function(app){

    app.get('/crimes/:id', function(req, res){
        var connection = app.Persistencia.connectionFactory();
        var crimeDAO = new app.Persistencia.crimeDAO(connection);

        var id = req.params.id; 

        crimeDAO.buscaPorId(id, function(erro, resultado){
            if(erro){
                console.log('erro ao consultar no banco '+ erro);
                res.status(500).send(erro);
            }else{
                console.log('consultado crime por id');
                res.status(200).send(JSON.stringify(resultado));
            }
        });

        connection.end();
    });


    app.get('/crimes', function(req, res){
        var connection = app.Persistencia.connectionFactory();
        var crimeDAO = new app.Persistencia.crimeDAO(connection);

        crimeDAO.lista(function(erro, resultado){
            if(erro){
                console.log('erro ao consultar no banco '+ erro);
                res.status(500).send(erro);
            }else{
                console.log('consultando todos os crimes');
                res.status(200).send(JSON.stringify(resultado));
            }
            
        });

       connection.end();
    });

    app.post('/crimes/crime', function(req, res){

        req.assert("tipo", "O tipo do crime é obrigatório").notEmpty();
        req.assert("descricao", "Informar uma descrição para o crime é obrigatório").notEmpty();
        req.assert("latitude", "A latitude obrigatória").notEmpty();
        req.assert("longitude", "A longitude obrigatória").notEmpty();

        var erros = req.validationErrors();
        if(erros){
            console.log('Erros de validacao encontrados');
            res.status(400).send(erros);
            return;
        }

        var crime = req.body;
        console.log('processando requisicao de um novo crime');
        crime.data = new Date;
        
        var connection = app.Persistencia.connectionFactory();
        var crimeDAO = new app.Persistencia.crimeDAO(connection);
        
        crimeDAO.salva(crime, function(erro, resultado){
            if(erro){
                console.log('erro ao inserir no banco '+ erro);
                res.status(500).send(erro);
            } else{
                console.log('crime criado');
                res.location('/crimes/crime/'+resultado.insertId);
                res.status(201).json(crime);
            }
            
        });

        connection.end();
    });

    app.delete('/crimes/remover/:id', function(req, res){
        var connection = app.Persistencia.connectionFactory();
        var crimeDAO = new app.Persistencia.crimeDAO(connection);

        var id = req.params.id; 

        crimeDAO.remover(id, function(erro, resultado){
            if(erro){
                console.log('erro ao deletar no banco '+ erro);
                res.status(500).send(erro);
            }else{
                console.log('removendo crime por id');
                res.status(200).send(JSON.stringify(resultado));
            }
        });

        connection.end();
    });


}
