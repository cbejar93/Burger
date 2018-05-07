var orm = require("../config/orm");

var orm = require("../config/orm.js");


var Burger = {
   all: function(cb) {
     orm.selectAll("burgers", function(res) {
       cb(res);
     });
   },
   create: function(value, condition, cb){
       orm.insertInto(value, condition, function(res){
       cb(res);
       });
   },
   delete: function(name,cb){
       orm.delete(name, function(res){
           cb(res);
       });
   },
   update: function(objcolval, burger,cb){
       orm.updateOne(objcolval, burger, function(res){
           cb(res);
       });
   }
}

module.exports = Burger;