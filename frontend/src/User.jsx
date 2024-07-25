import React from 'react'
import { Link } from 'react-router-dom'

function User() {
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
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>

       </div>
    </div></>
  )
}

export default User