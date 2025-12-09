const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_blog'
})


connection.connect((err) => {
    if (err) throw err.message
    console.log('DB Connection successful!');
})


module.exports = connection