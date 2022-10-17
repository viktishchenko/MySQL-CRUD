/* shift + alt + a → rafce */
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  /* ust */
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  })

  /* usenav */
  const navigate = useNavigate()

  /* nfn */
  const handleChange = (e)=>{
    setBook((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

/* nfn */
const handleClick = async (e) => { 
  e.preventDefault()
try {
  await axios.post("http://localhost:8800/books", book)
  navigate("/")
} catch (error) {
  console.log(error)
}
 }

  return (
    <div className='form'>
     <h1>Add New Book</h1>
     <input type="text" placeholder='title' onChange={handleChange} name="title" />
     <input type="text" placeholder='description' onChange={handleChange} name="description"/>
     <input type="number" placeholder='price' onChange={handleChange} name="price"/>
     <input type="text" placeholder='cover' onChange={handleChange} name="cover" />
     <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add