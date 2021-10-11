import React from 'react'
import Avatar from 'react-avatar';
import "bootstrap/dist/css/bootstrap.min.css"
import {FaEdit,FaRemoveFormat} from "react-icons/fa"

import '../../styles/App.css';
const Contact = ({contact}) => {
    return (
        <>
        
         <tr>
      <th scope="row"> 
      <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label htmlFor="" className="custom-control-label"></label>
          </div>
          </th>
      <td> <Avatar name ={contact.name} size="45" round={true} className="me-3" />{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}  </td>
      <td >  <span  className="act"><FaEdit/></span>  <FaRemoveFormat className="text-danger act"/></td>
    </tr>   
            
        </>
    )
}

export default Contact
