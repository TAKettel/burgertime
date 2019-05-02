let orm = require("../config/orm.js");

let burger = {
    select: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne(cols, vals, function(res) {
            console.log("This is the error: " + cb);
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update(objColVals, condition, function(res) {
          cb(res);
        });
    },
    delete: function(name, cb) {
        orm.delete(name, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;