import React from "react"
import {useEffect } from "react";
import { useState } from "react";
import Button from "./button";
//import {useHistory} from "react-router-dom"
const Table=(props)=>{
  const [users,setUsers]=useState([]);
  //const navigate = useNavigate();
  
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  };
  fetch('http://localhost:3001/user/all/users', requestOptions)
      .then(response => response.json())
      .then(data => setUsers(data.reverse()))
},[])

const onDelete=(e,user)=>{
  e.preventDefault();

  const requestOptions = {
    method: 'DELETE',
};
fetch(`http://localhost:3001/user/${user._id}`, requestOptions)
    .then(response=> response.json())
    .then((user)=>{
      setUsers(prev =>prev.filter(u=>u._id!==user._id))

    }    
     )
  }
    return(
        <div>
            <h1> Liste des données</h1>
        
        <table >
          <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          </thead>
        
          <tbody>
          {users && users.map((user)=>{
            return(
              <tr>              
              <td>{user._id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td> <Button text="edit" /*onClick={()=>history.push(`/user/update/${user._id}`)}*//>
              <Button text="delete" onClick={(e)=>onDelete(e,user)}/></td>

          </tr>
            )
          })  }
          
          </tbody>
        </table>
     </div>
    
   
    )
}
export default Table;