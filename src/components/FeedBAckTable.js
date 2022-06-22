import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import "../Styles/FeedBack.css";

const FeedBAckTable = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "http://localhost:4000/feedback/getAllFeedBacks"
      );
      setPosts({ blogs: data.anno });
      console.log(data.anno);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div className=" border-warning" id="content">
      <h5 className="FeedbackPublic">FEEDBACKS</h5>

      <ReactBootStrap.Table table table-striped hover>
        <thead className="center">
          <tr>
            <th width="10%">Name</th>
            <th width="10%">Email</th>
            <th width="10%">Comment</th>
            <th width="5%">Rating</th>
            <th width="5%">UserId</th>
            <th width="5%">DriverId</th>
            <th width="20%">CreatedAt</th>
            <th width="20%">UpdateAt</th>

            <th width="10%"></th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className="center">{item.email}</td>
                <td className="center">{item.comment}</td>
                <td className="center">{item.rating}</td>
                <td className="center">{item.userId}</td>
                <td className="center">{item.driverId}</td>
                <td className="center">{item.createdAt}</td>
                <td className="center">{item.updatedAt}</td>

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

export default FeedBAckTable;
