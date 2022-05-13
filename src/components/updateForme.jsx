//import { Link } from "react-router-dom";
import Button from "./button";
//import {useEffect } from "react";
import { useState } from "react";
const UpdateForme=(props)=>{
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [setUsers] = useState([]);

  const update=(e,user)=>{
    //console.log(user);
    e.preventDefault();
    
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(user ) 
  };
  fetch(`http://localhost:3001/user/update/${user._id}`, requestOptions)
      .then(response => response.json())
      .then( (user)=>
      {
        
        console.log(user._id);
        setUsers(prev=>[...prev,user])      
      }
       )
  }
  const onReset = (e) => {
    e.preventDefault()
    setFirstName('')
    setLastName('')
    setEmail('')
    //setId('')
  }
    return(
        <div>
            <h1> Edit user </h1>
            <form className="login-form" >
        <div className="login-row">
          <label className="form-label" htmlFor="login-label">FirstName </label>

          <input className="form-control" 
            type="text"
            placeholder="firstname"
            //alt="name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="login-row">
          <label className="form-label" htmlFor="login-label">
            LastName
          </label>
          <input className="form-control"
            name="lastName"
            placeholder="lastname"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

        </div>
        <div className="login-row">
          <label className="form-label" htmlFor="login-label">
            Email
          </label>
          <input className="form-control"
            type="email"
            name="email"
            placeholder="exemple@gmail.com"
            
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      
        <div className="action-container">
          <Button text="reset" onClick={onReset}  />
          <Button text="update"  onClick={(e)=>update(e,{firstName,lastName,email})} />   
        </div>

      </form>
        </div>
    )
}
export default UpdateForme;