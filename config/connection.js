var mysql = require("mysql");


var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'burgers'
  });
}

connection.connect(function(err){
    if (err){
        console.log("error connecting " + err.stack);
    }
    console.log("connect as ID " + connection.threadId);

});

module.exports = connection 