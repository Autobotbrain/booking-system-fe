//---------annousment Update page---------

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Annousment.css";

export default function AnnousmentUpdate() {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:4000/app/AddNewAnno/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.anno));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:4000/app/AddNewAnno/${id}`, {
        Title: String(inputs.Title),
        Description: String(inputs.Description),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/Admin"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="public">
      <div className="topic">UPDATE ANNOUNCEMENT</div>

      <div className="create">
        {inputs && (
          <form className="frm" onSubmit={handleSubmit}>
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

            <br />
            <button type="submit" className="btn btn-warning">
              Update Announsment
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
