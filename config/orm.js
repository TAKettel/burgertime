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
    insertOne: function(vals, cb) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES  (" + vals + ") ";
        connection.query(queryString, vals, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });      
    },
    updateOne: function() {
        let queryString = "UPDATE burgers SET "
        // ????
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