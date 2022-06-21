import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
//import "./FeedBack.css";

const ViewBookings = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "http://localhost:4000/vieworders/getAllOrders"
      );
      setPosts({ blogs: data.anno });
      console.log(data.anno);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div className=" border-warning" id="content">
      <h5 className="FeedbackPublic">ViewBookings</h5>

      <ReactBootStrap.Table table table-striped hover>
        <thead className="center">
          <tr>
            <th width="15%">bookingAt</th>
            <th width="15%">bookingOn</th>
            <th width="20%">user</th>
            <th width="15%">vehicle</th>
            <th width="15%">createdAt</th>
            {/* <th width="10%">is</th> */}

            <th width="10%"></th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.bookingAt}</td>
                <td className="center">{item.bookingOn}</td>
                <td className="center">{item.user}</td>
                <td className="center">{item.vehicle}</td>
                <td className="center">{item.createdAt}</td>
                {/* <td className="center">{item.is}</td> */}
                {/* <td className="center">{item.createdAt}</td>
                <td className="center">{item.updatedAt}</td> */}

                <td>
                  <button type="button" className="btn btn-danger d-flex">
                    REMOVE
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default ViewBookings;
