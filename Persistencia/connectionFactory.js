var mysql = require('mysql');

function createDBConecction(){
    return mysql.createConnection({
        host: 'mysql.hfmsolucoes.kinghost.net',
        user: '',
        password: '',
        database: ''
    });
}

module.exports = function(){
    return createDBConecction;
}