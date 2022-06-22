import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
//import "./FeedBack.css";

const CheckVehiclesRegistration = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        `http://localhost:4000/checkVehicles/checkVehicles`
      );
      setPosts({ blogs: data.anno });
      console.log(data.anno);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div className=" border-warning" id="content">
      <h5 className="FeedbackPublic">View New Registered Vehicles</h5>

      <ReactBootStrap.Table table table-striped hover>
        <thead className="center">
          <tr>
            <th width="15%">Vehicle Owner</th>
            <th width="10%">Vehicle Model</th>
            <th width="10%">Vehicle Number</th>
            <th width="10%">Type</th>
            <th width="5%">Seats</th>
            <th width="10%">NIC</th>
            <th width="10%">Mobile Number</th>
            <th width="10%">Email</th>

            <th width="10%"></th>
            <th width="10%"></th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.VehicleOwner}</td>
                <td className="center">{item.VehicleModel}</td>
                <td className="center">{item.VehicleNumber}</td>
                <td className="center">{item.Type}</td>
                <td className="center">{item.Seats}</td>
                <td className="center">{item.ID}</td> 
                <td className="center">{item.MNumber}</td>
                <td className="center">{item.email}</td>


                <td>
                <button type="button" className="btn btn-success">
                    ACCEPT
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger d-flex">
                    REJECT
                  </button>
                </td>
                
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default CheckVehiclesRegistration;
