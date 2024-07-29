import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function User() {

  const [user,setUser] = useState([])
 
    useEffect(()=>{
      axios.get('http://localhost:4000')
      .then((res)=>setUser(res.data))
    },[])

    const userDelete = (z)=>{
         axios.delete('http://localhost:4000/delete/'+z)
         .then(()=>{
          window.location.reload()
         })
    }

  return (
    <>
     <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
       <div className='w-50 bg-primary rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                user.map((value)=>{
                  console.log(value._id)
                  return <tr>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <button onClick={()=>userDelete(value._id)}>delete</button>
                  </tr>
                })
               }
            </tbody>
        </table>

       </div>
    </div></>
  )
}

export default User