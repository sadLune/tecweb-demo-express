const mysql = require("mysql2")

const uri = process.env.CLEARDB_DATABASE_URL
const con = mysql.createConnection({ uri: uri })
con.connect((err) => {
  if(err){
    console.log("Failed to connect to MySQL - ", err)
    process.exit(1)
  }
  console.log("Connected successfully to MySQL URI: " + uri)
});
module.exports = con