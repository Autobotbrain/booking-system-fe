import { Component } from "react";
import "./ViewOrders.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

export default function ViewOrders() {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios("http://localhost:4000/orders/getAll");
      setPosts({ blogs: data.anno });
      console.log(data.anno);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h2 className="ViewOrdersWellcome">Wellcome</h2>
          <br />
        </div>

        <div className="col-8">
          <h5 className="ViewOrdersPublic">View Booking</h5>

          <ReactBootStrap.Table table table-striped hover>
            <thead className="center">
              <tr>
                <th width="20%">User</th>
                <th width="10%">Picked up time</th>
                <th width="10%">Arrived Time</th>
                <th width="10%">cost</th>
              </tr>
            </thead>
            <tbody>
              {posts.blogs &&
                posts.blogs.map((item) => (
                  <tr key={item.id}>
                    <td>{item.user}</td>
                    <td>{item.ptime}</td>
                    <td>{item.atime}</td>
                    <td>{item.cost}</td>
                  </tr>
                ))}
            </tbody>
          </ReactBootStrap.Table>
        </div>

        <div className="col-2">
          <img
            src="2.jpg"
            width="150"
            className="VehicleViewordersimg"
            height="150"
          ></img>

          <div className="VehicleViewDetails">
            <div className="VehicalViewInfo"></div>

            <div className="VehicalViewInfo"></div>

            <div className="VehicalViewInfo"></div>

            <div className="VehicalViewInfo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
