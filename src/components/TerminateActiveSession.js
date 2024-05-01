import "../App.css";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const TerminateActiveSession = () => {
  const [data, setData] = useState([]);

  const savedUser = localStorage.getItem('restaurantFinderUserId');
  const userId = JSON.parse(savedUser);
  
  const savedSession = localStorage.getItem('restaurantFinderSessionId');
  const sessionId = JSON.parse(savedSession);

  if (userId == null || sessionId == null) {
    window.location = "/error";
  }

  useEffect(() => {
    axios
      .post(`http://localhost:8080/restaurant/api/v1/terminateSession/${sessionId}/${userId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if(data.statusCode ==200) {
    localStorage.removeItem("restaurantFinderSessionId");

    return (
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>restaurant Name</th>
          <th>restaurant Added By</th>
          <th>session Id</th>
        </tr>
      </thead>

      <tbody>
        {
          <tr key={data.restaurantName}>
            <td>{data.restaurantName}</td>
            <td>{data.restaurantAddedBy}</td>
            <td>{data.sessionId}</td>
          </tr>
        }
      </tbody>
    </Table>
    );
  } else {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Message</th>
          </tr>
        </thead>
  
        <tbody>
          {
            <tr key={data.message}>
              <td>{data.message}</td>
            </tr>
          }
        </tbody>
      </Table>
    );
  }


};
export default TerminateActiveSession;
