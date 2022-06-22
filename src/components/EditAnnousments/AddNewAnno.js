//----------Add a new annousment page---------

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Annousment.css";

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
    sendRequest().then(() => history("/Admin"));
  };

  return (
    <div className="newpublic">
      <div className="topic">ADD NEW ANNOUNCEMENT</div>

      <div className="create">
        <form onSubmit={handleSubmit}>
          <label className="title">Announsment Title :</label>
          <br />
          <input
            type="text"
            required
            value={inputs.Title}
            onChange={handleChange}
            name="Title"
            className="AnnoTitle"
          />

          <br />

          <label>Announsment Body :</label>
          <br />
          <textarea
            required
            value={inputs.Description}
            onChange={handleChange}
            name="Description"
            className="AnnoBody"
          ></textarea>

          <button type="submit" className="btn btn-warning">
            Add Announsment
          </button>
        </form>
      </div>
    </div>
  );
}
