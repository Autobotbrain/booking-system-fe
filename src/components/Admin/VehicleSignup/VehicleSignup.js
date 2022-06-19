import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
// import './xx.css'

const SignupTable = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios("http://localhost:4000/User/signupDetails");
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div className="border border-warning" id="content">
      <ReactBootStrap.Table table table-striped hover>
        <thead className="center">
          <tr>
            <th width="20%">VehicleOwner</th>
            <th width="5%">VehicleModel</th>
            <th width="5%">VehicleNumber</th>
            <th width="5%">Type</th>
            <th width="5%">Seats</th>
            <th width="10%">ID</th>
            <th width="10%">MNumber</th>
            <th width="10%">email</th>
            <th width="15%"></th>
            <th width="15%"></th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                {/* <td>{item.id}</td> */}
                <td className="center">{item.VehicleOwner}</td>
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
                  <button type="button" className="btn btn-danger">
                    REJECT
                  </button>
                </td>
                {/* <td><button type="button" className="btn btn-danger d-flex" >REMOVE</button></td> */}
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default SignupTable;
