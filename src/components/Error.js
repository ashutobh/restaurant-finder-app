import React from 'react'
import '../App.css'
import { Table } from 'react-bootstrap';

const Error = () => {
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
                <td>No user/session exists. Please create user/session first!</td>
              </tr>
            }
          </tbody>
        </Table>
      );
    };

export default Error