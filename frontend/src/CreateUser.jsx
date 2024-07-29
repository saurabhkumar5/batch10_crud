import React, { useState } from 'react'

import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
   
   const [name, setName]  = useState();
   const [email, setEmail]  = useState();
   const [password, setPassword]  = useState();

   const navigate = useNavigate()

   const submit = (e)=>{
    e.preventDefault()
        axios.post("http://localhost:4000/create",{name,email,password})
              .then((a)=>{
                console.log(a)
                navigate('/')
              })
   }
  return (
    <>
    <div>
    <h1>Add user</h1>
    <form onSubmit={submit}>
        <input type='text' placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/><br />
        <input type='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/><br />
        <input type='password' placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/><br />

        <button className='btn btn-success'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default CreateUser