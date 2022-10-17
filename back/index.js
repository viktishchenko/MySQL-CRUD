import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

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

app.use(express.json())
app.use(cors())

// check route (port 8800)
app.get("/", (req, res) => { 
    res.json("Hello this is backend!")
 })

 //select db data
 /* 
 * if error / auth problem
 * Execute the following query in MYSQL Workbench or MiSQL Command Line Client
 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';
 * flush privileges;
  */
 app.get("/books", (req, res) => { 
    const q = "SELECT * FROM books"
    db.query(q, (err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
  })

  // Create any book
app.post("/books", (req, res) => { 
      const q = "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES(?)"
      const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,
      ]

      db.query(q, [values], (err,data) => { 
        if(err)return res.json(err)
        return res.json("Book has been created successfully!")
       })
 })

 /* anfn/nfn */
 app.delete("/books/:id",(req, res) => { 
  const bookId = req.params.id
  const q = "DELETE FROM books WHERE id = ?"

  db.query(q, [bookId], (err, data) => { 
    if(err)return res.json(err)
    return res.json("Book has been deleted successfully!")
   })
  })

 /* anfn/nfn */
 app.put("/books/:id",(req, res) => { 
  const bookId = req.params.id
  const q = "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE id = ?"

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ]

  db.query(q, [...values, bookId], (err, data) => { 
    if(err)return res.json(err)
    return res.json("Book has been updated successfully!")
   })
  })

//anfn
app.listen(8800, () => { 
console.log("Connected to backend!")
 })