import React from "react"
import { Link } from "react-router-dom"
const Navigation=(props)=>{
    return(
        <ul style={{display:'flex'}}>
            <Link to={'/'}>
            <li style={{marginLeft:10, listStyle:'none'}}><b>User</b></li>
            </Link >
            <Link to='/table'>
            <li style={{marginLeft:10, listStyle:'none'}}><b>Table</b> </li>
            </Link>
        </ul>
    )
}
export default Navigation