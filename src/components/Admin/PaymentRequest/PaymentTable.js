import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
// import './xx.css'
import "./Payment.css";

const PaymentTable = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios("http://localhost:4000/payment/getAll");
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div className=" border-warning" id="content">
      <h5 className="PaymentPublic">PAYMENT REQUESTS</h5>

      <ReactBootStrap.Table table table-striped hover>
        <thead className="center">
          <tr>
            <th width="30%">NAME</th>
            <th width="10%">AMOUNT</th>
            <th width="10%">DATE</th>
            <th width="20%">METHOD</th>
            <th width="15%"></th>
            <th width="15%"></th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                {/* <td>{item.id}</td> */}
                <td className="center">{item.name}</td>
                <td className="center">{item.amount}</td>
                <td className="center">{item.date}</td>
                <td className="center">{item.method}</td>

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

export default PaymentTable;
