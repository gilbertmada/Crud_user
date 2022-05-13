//import { Link } from "react-router-dom";

import Button from "./button";
//import {useEffect } from "react";
import { useState } from "react";
const Forme=()=>{
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ setUsers] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({firstName, lastName, email})
  };
    fetch('http://localhost:3001/user/create-user', requestOptions)
        .then(response => response.json())
        .then((user)=> {
         setUsers(prev=>[...prev, user]);
        })  
        
  }
  const onReset = (e) => {
    e.preventDefault()
    setFirstName('')
    setLastName('')
    setEmail('')
  }
    return(
        <div>
            <h1> Add user</h1>
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
              // console.log("tay be", e);
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
              // console.log("tay be", e);
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
              // console.log("tay be", e);
            }}
          />
        </div>
      
        <div className="action-container">
          <Button text="reset" onClick={onReset}  />
          <Button text="submit"  onClick={onSubmit} />    
        </div>

      </form>
        </div>
    )
}
export default Forme;