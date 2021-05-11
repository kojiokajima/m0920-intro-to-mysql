const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD
})

module.exports = pool.promise()