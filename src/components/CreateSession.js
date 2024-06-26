import "../App.css";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const CreateSession = () => {
  const [data, setData] = useState([]);

  const savedUser = localStorage.getItem('restaurantFinderUserId');
  const userId = JSON.parse(savedUser);
 // alert("Session Id" + userId);

 if(userId == null) {
  window.location = "/userError"; 
}


  useEffect(() => {
    axios
      .post(`http://localhost:8080/restaurant/api/v1/createSession/${userId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
   
  if(data != null && data.statusCode == 200) {
    //alert("restaurantFinderSessionId" + JSON.stringify(data.sessionId));
    localStorage.setItem("restaurantFinderSessionId", JSON.stringify(data.sessionId));
  }  else if(data != null && data.statusCode == 400) {
    //alert(' >' + JSON.stringify(data.sessionId));
    localStorage.setItem("restaurantFinderSessionId", JSON.stringify(data.sessionId));
  }  
  
  
  if(data.statusCode ==200) {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Session Id</th>
            <th>Session Requested By</th>
            <th>Status</th>
          </tr>
        </thead>
  
        <tbody>
          {
            <tr key={data.sessionId}>
              <td>{data.sessionId}</td>
              <td>{data.sessionRequestedBy}</td>
              <td>{data.message}</td>
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
            <th>Session Id</th>
            <th>Message</th>
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
  }
  
};
export default CreateSession;
