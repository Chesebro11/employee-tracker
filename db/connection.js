const mysql = require('mysql2');

const connection = mysql.createConnection({
    database: "db12",
    host: "localhost",
    user: 'root',
    password: 'J147c14z!',
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

module.exports = connection;