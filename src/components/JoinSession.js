import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const JoinSession = () => {
  const [data, setData] = useState([]);

  const savedUser = localStorage.getItem("restaurantFinderUserId");
  const userId = JSON.parse(savedUser);

  const savedSession = localStorage.getItem("restaurantFinderSessionId");
  const sessionId = JSON.parse(savedSession);

  if (userId == null || sessionId == null) {
    window.location = "/error";
  }

  //  alert("Local Storage User Id " + userId);
  //  alert("Local Storage session Id " + sessionId);

  useEffect(() => {
    axios
      .post(
        `http://localhost:8080/restaurant/api/v1/joinSession/${sessionId}/${userId}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Session Id</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {
          <tr key={data.sessionId}>
            <td>{data.sessionId}</td>
            <td>{data.message}</td>
          </tr>
        }
      </tbody>
    </Table>
  );
};
export default JoinSession;
