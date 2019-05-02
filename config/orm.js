let connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        let queryString = "SELECT * FROM  burgers;";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES  (" + vals + ") ";
        connection.query(queryString, cols, vals, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });      
    },
    update: function(objColVals, condition, cb) {
      var queryString = "UPDATE burgers SET " + objToSql(objColVals) +  " WHERE " + condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
      delete: function(name, cb) {
    var queryString = "DELETE FROM burgers WHERE " + name;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;