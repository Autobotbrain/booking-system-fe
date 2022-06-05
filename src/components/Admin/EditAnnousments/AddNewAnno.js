import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddNewAnno() {

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    Title: "",
    Description: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:4000/app/AddNewAnno", {
        Title: String(inputs.Title),
        Description: String(inputs.Description),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/e"));
  };

  return (
    <div>

                      <h5 className='public'>Add a new Announsment</h5>
            
                        <div className="create">
                           <form onSubmit={handleSubmit}>
                             <label>Announsment Title :</label>
                             <input 
                               type="text" 
                               required 
                               value={inputs.Title}
                               onChange={handleChange}
                               name='Title'
                            
                             />
            
                             <label>Announsment Body :</label>
                             <textarea 
                               required
                               value={inputs.Description}
                               onChange={handleChange}
                               name='Description'
                             >
            
                             </textarea>
            
                             <button type="submit">Add Announsment</button>
                           </form>
                         
                         </div> 
                           
            
                         </div>
    
  )
}


