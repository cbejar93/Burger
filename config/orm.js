var connection = require("./connection.js");

var orm = {
    selectAll: function(table){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, res){
            if (err) throw err; 
            console.log(res); 
        })
    },
    insertInto: function(newInput){
        var queryString = "INSERT INTO burgers SET ?"
        connection.query(queryString, [newInput], function (err, res){
            if (err) throw err;
            console.log(res);
        })
    },
    updateOne: function(name, boolean){
        var queryString = "UPDATE burgers SET ? WHERE ?"
        connection.query (queryString, [boolean, name], function(err ,res){
            if (err) throw err;
            console.log(res);
        })
    }
    
}