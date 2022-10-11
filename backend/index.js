import express from 'express'
import mysql from 'mysql'

import dotenv from 'dotenv'
dotenv.config()

const PASSWORD = process.env.PASSWORD

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: PASSWORD,
    database: "test"
})

// check route (port 8800)
app.get("/", (req, res) => { 
    res.json("Hello this is backend!")
 })

 //select db data
 /* 
 * if error
 * Execute the following query in MYSQL Workbench or MiSQL Command Line Client
 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
 * flush privileges;
  */
 app.get("/books", (req, res) => { 
    const q = "SELECT * FROM books"
    db.query(q, (err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
  })

//anfn
app.listen(8800, () => { 
console.log("Connected to backend!")
 })