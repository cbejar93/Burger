var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, res){
            if (err) throw err; 
            console.log(res); 
            cb(res);
        })
    },
    insertInto: function(newInput, value, cb){
        var queryString = "INSERT INTO burgers SET ?"
        connection.query(queryString, [newInput, value], function (err, res){
            if (err) throw err;
            console.log(res);
            cb(res);
        })
    },
    updateOne: function(name, boolean,){
        var queryString = "UPDATE burgers SET ? WHERE ?"
        connection.query (queryString, [boolean, name], function(err ,res){
            if (err) throw err;
            console.log(res);
            cb(res);
        })
    }
    
}

module.exports = orm;