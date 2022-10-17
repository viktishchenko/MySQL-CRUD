/* shift + alt + a → rafce */
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  /* ust */
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  })

  /* usenavigation */
  const navigate = useNavigate()
  /* uselocation */
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

/* 
* console.log(location) // bject { pathname: "/update/2", search: "", hash: "", state: null, * key: "e6pb1pkw" }
*
* console.log(location.pathname) // /update/2
*
* console.log(location.pathname.split("/")[2]) // 2 
  */


  /* nfn */
  const handleChange = (e)=>{
    setBook((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

/* nfn */
const handleClick = async (e) => { 
  e.preventDefault()
try {
  await axios.put("http://localhost:8800/books/"+bookId, book)
  navigate("/")
} catch (error) {
  console.log(error)
}
 }

  return (
    <div className='form'>
     <h1>Update this Book</h1>
     <input type="text" placeholder='title' onChange={handleChange} name="title" />
     <input type="text" placeholder='description' onChange={handleChange} name="description"/>
     <input type="number" placeholder='price' onChange={handleChange} name="price"/>
     <input type="text" placeholder='cover' onChange={handleChange} name="cover" />
     <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update