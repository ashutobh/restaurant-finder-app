import '../App.css'
import React, { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import axios from 'axios';


const ShowActiveSession = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/api/v1/getActiveSession`)
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
                <th>Session Id</th>
                 <th>Session Requested By</th>
            </tr>
        </thead>

        <tbody>
            {
                 <tr key={data.sessionId}>
                 <td>{data.sessionId}</td>
                 <td>{data.sessionRequestedBy}</td>
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
export default ShowActiveSession;