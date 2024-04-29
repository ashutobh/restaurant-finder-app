import React, { useState, useEffect } from "react"
import '../App.css'
import Table from 'react-bootstrap/Table';
import axios from "axios";


const ShowSelectedRestaurant = () => {

  const [data, setData] = useState([]);

  if(localStorage.getItem('restaurantFinderUserId') == null ) {
    localStorage.removeItem('restaurantFinderUserId');
  }
  if(localStorage.getItem("restaurantFinderSessionId") == null ) {
    localStorage.removeItem("restaurantFinderSessionId");
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/api/v1/getSelectedRestaurant`)
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
                <th>Restaurant Name</th>
                 <th>Restaurant Added By</th>
                 <th>Restaurant Status</th>
                 <th>Session Id</th>
                 <th>Session Status</th>
            </tr>
        </thead>
        <tbody>
            {
                 <tr>
                 <td>{data.restaurantName}</td>
                 <td>{data.restaurantAddedBy}</td>
                 <td>{data.restaurantStatus}</td>
                 <td>{data.sessionId}</td>
                 <td>{data.sessionStatus}</td>
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
}
export default ShowSelectedRestaurant;