let orm = require("../config/orm.js");

let burger = {
    select: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(vals, cb) {
        orm.insertOne(vals, function(res) {
            cb(res);
        });
    },
    update: function() {},
    // ????
    delete: function(name, cb) {
        orm.delete(name, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;