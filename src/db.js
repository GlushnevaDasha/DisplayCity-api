// import pg from "pg-promise";
const pg = require('pg-promise')();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'arduino',
    user: 'admin',
    password: 'admin'
};
var db = pg(cn);

 
export function allinfo(values)
{
    return db.any("SELECT temp,press,hum,gas from statistical where mac=${mac}} and date = (SELECT max(date) from statistical)",values)
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

export function addinfo(values)
{
    console.log(values);
    db.none('INSERT INTO statistical (mac,temp,press,hum,gas,date) VALUES(${mac},${temp},${press},${hum},${gas},${date})', values)
}

export function infotemp(values /*mac,datenow,hours*/)
{
    return db.any("SELECT temp from statistical where mac=${mac}} and (date >= ${datenow}} - interval '${hours}} hours')",values/*[mac,datenow,hours]*/)
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

export function infopress(values /*mac,datenow,hours*/)
{
    return db.any("SELECT pess from statistical where mac=${mac}} and (date >= ${datenow}} - interval '${hours}} hours')",values/*[mac,datenow,hours]*/)
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

export function infohum(values /*mac,datenow,hours*/)
{
    return db.any("SELECT hum from statistical where mac=${mac}} and (date >= ${datenow}} - interval '${hours}} hours')",values/*[mac,datenow,hours]*/)
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

export function infogas(values /*mac,datenow,hours*/)
{
    return db.any("SELECT gas from statistical where mac=${mac}} and (date >= ${datenow}} - interval '${hours}} hours')",values/*[mac,datenow,hours]*/)
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}

export function macuser(values/*login,password*/)
{
    return db.any("SELECT mac from users where (login=${login} and password=${password})",values/*[login,password]*/)
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}
// module.exports= {allinfo, addinfo};