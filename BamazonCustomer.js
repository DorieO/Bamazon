

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "BamazonDB"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

connection.query('SELECT * FROM Products', function(err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].ItemID + " | " + res[i].ProductName + " | " + res[i].Price);
    }
    console.log("-----------------------------------");
})
//ask how many
//
connection.query('SELECT * FROM Products WHERE Product=?', ['ItemID'], function(err, res) {
    for (var i = 0; i =< res.length; i++) {
        console.log(res[i].ItemID + " | " + ;
    }
})
        if quantity is = or > consloe.log("Insufficient quantity!")
        else
        	run price $ quantity through sql and give customer total
        			subtract from database for records