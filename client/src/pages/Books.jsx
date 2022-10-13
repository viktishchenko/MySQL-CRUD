/* shift + alt + a → rafce */
import React, { useEffect} from 'react'
// import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Books = () => {
  // const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async ()=>{
      try {
        const res = await axios.get("http://localhost:8800/books")
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  
    fetchAllBooks()
  }, [])
  return (
    <div>Books</div>
  )
}

export default Books