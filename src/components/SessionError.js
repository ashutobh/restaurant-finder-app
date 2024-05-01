import React from 'react'
import '../App.css'
import { Table } from 'react-bootstrap';

const SessionError = () => {
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
                <td>No session exists. Please create session first!</td>
              </tr>
            }
          </tbody>
        </Table>
      );
    };

export default SessionError