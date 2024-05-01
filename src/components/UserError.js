import React from 'react'
import '../App.css'
import { Table } from 'react-bootstrap';

const UserError = () => {
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
                <td>No user exists. Please create user first!</td>
              </tr>
            }
          </tbody>
        </Table>
      );
    };

export default UserError