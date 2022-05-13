
import {  Routes, Route , BrowserRouter} from 'react-router-dom'
import Forme from "./forme";
import Table from "./table"; 
import Navigation from "./navigation";
import UpdateForme from './updateForme';
import NotFound from './notFound';
import "./User.css"
//import { useState } from "react";
function User() {
  

  return (
    
    <div>   
      <BrowserRouter>
      <Navigation/>
      <Routes>
         <Route  path="/" element={<Forme/> }/> 
         <Route  path="/table" element={<Table/>}/>   
         <Route  path="/user/update/:id" element={<UpdateForme/> }/> 
         
         <Route   element={<NotFound/> }/>
      </Routes>
      </BrowserRouter>  
      
    </div>
   
    
         
    
  );
}
export default User;
