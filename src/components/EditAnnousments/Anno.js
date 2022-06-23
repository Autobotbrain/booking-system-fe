import React from "react";
import "../../Styles/Annousment.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Anno(props) {
    const history = useNavigate();

    const { _id, Title, Description } = props.anno;

    //---------Annousment delete----------
    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:4000/app/AddNewAnno/${_id}`)
            .then((res) => res.data)
            .then(() => history("/Admin"));
            alert("Do you want to delete? ");
    };

    return (
        <div >
            <h4>{Title}</h4>
            <p>{Description}</p>
            <Link to={`/Admin/${_id}`}>
                <button type="button" className="btn btn-primary button">
                    UPDATE
                </button>
            </Link>

            <Link to={`/Admin/${_id}`}>
                <button
                    onClick={deleteHandler}
                    type="button"
                    className="btn btn-danger button"
                >
                    DELETE
                </button>
                
            </Link>
        </div>
    );
}