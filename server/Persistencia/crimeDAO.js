function CrimeDAO(connection) {
    this._connection = connection;
  }

  CrimeDAO.prototype.salva = function(crime,callback) {
      this._connection.query('INSERT INTO crimes SET ?', crime, callback);
  }

  CrimeDAO.prototype.lista = function(callback) {
      this._connection.query('select * from crimes',callback);
  }

  CrimeDAO.prototype.buscaPorId = function (id,callback) {
      this._connection.query("select * from crimes where id = ?",[id],callback);
  }

  CrimeDAO.prototype.remover = function (id,callback) {
      this._connection.query("delete from crimes where id = ?",[id],callback);
  }

  module.exports = function(){
      return CrimeDAO;
  };