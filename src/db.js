const pg = require('pg-promise')();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'arduino',
    user: 'admin',
    password: 'admin'
};
var db = pg(cn);

var allinfo = db.any("SELECT * from statistical")
.then(function (data) {
    console.log("Temperature:", data);
})
.catch(function (error) {
    console.log("ERROR:", error);
});

function addinfo(values)
{
    var sql = "INSERT INTO customers (mac,temp,press,hum,gas,date) VALUES ?";
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
}

module.exports= {allinfo, addinfo};