import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function Update() {

          const {id} = useParams();
        //   console.log(id)
        const navigate = useNavigate()

     const [name,setName]  = useState()
     const [email,setEmail]  = useState()
     const [password,setPassword]  = useState()

      useEffect(()=>{
        axios.get('http://localhost:4000/getuser/'+id)
        .then((value)=>{
            // console.log(value.data.name)
            setName(value.data.name)
            setEmail(value.data.email)
            setPassword(value.data.password)
        })

      },[])


      function update(e){
           e.preventDefault()
           axios.put('http://localhost:4000/updateUser/'+id,{name,email,password})
           .then((res)=>{
            console.log(res)
            navigate('/')
           })
      }
  return (
    <>
      <div>
        <h1>Update user</h1>
        <form onSubmit={update}>
          <input
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Update;
