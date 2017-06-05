var mysql = require('mysql');

function createDBConecction(){
    return mysql.createConnection({
        host: 'mysql.hfmsolucoes.kinghost.net',
        user: 'hfmsolucoes',
        password: 'hfm2017',
        database: 'hfmsolucoes'
    });
}

module.exports = function(){
    return createDBConecction;
}