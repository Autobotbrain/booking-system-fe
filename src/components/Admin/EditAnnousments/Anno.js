import React from 'react'
import './Annousment.css'
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Anno(props) {

    const history = useNavigate();

    const{_id,Title,Description} = props.anno;

    //---------Annousment delete----------
    const deleteHandler = async() =>{
       await axios
        .delete(`http://localhost:4000/app/AddNewAnno/${_id}`)
        .then((res)=> res.data)
        .then(() => history("/e"));
    };


  return (
    <div>
        <h4>{Title}</h4>
        <p>{Description}</p>
        <Link to= {`/e/${_id}`}>
          <button className='button'>Update</button>
        </Link>
        
        <Link to= {`/e/${_id}`}>
        <button onClick={deleteHandler} className='button'>Delete</button>
        </Link>
    </div> 
  )
}


