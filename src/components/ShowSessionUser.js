import '../App.css'
import React, { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import axios from 'axios';


const ShowSessionUser = () => {

  const [data, setData] = useState([]);

  const savedSession = localStorage.getItem('restaurantFinderSessionId');
  alert("Local Storage session Id " + savedSession);
  
  const sessionId = JSON.parse(savedSession);
  alert("Local Storage session Id " + sessionId);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/api/v1/showAllSessionUsers/${sessionId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  if(data.statusCode ==200) {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
          <tr>
                <th>Email Address</th>
                 <th>First Name</th>
                 <th>Last Name</th>
            </tr>
          </tr>
        </thead>
        <tbody>
            {data && data.users && data.users.map(user =>
                 <tr key={user.emailAddress}>
                 <td>{user.emailAddress}</td>
                 <td>{user.firstName}</td>
                 <td>{user.lastName}</td>
               </tr>
            )}
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

}
export default ShowSessionUser;