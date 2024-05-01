import '../App.css'
import React, { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const ResetApp = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/api/v1/resetToDefault`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if(data.statusCode ==200) {
    localStorage.removeItem('restaurantFinderUserId');
    localStorage.removeItem('restaurantFinderSessionId');

    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
                <th>Message</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>System Reset Successfully!</td>
            </tr>
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
            <tr>
              <td>Unable to reset the System!</td>
            </tr>
          }
        </tbody>
      </Table>
    );
  }
}

export default ResetApp;