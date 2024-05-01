import "../App.css";
import { Table } from 'react-bootstrap';

const Home = () => {

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Welcome to the Restaurant Finder App. Please follow below instructions to vote and select Restaurant</th>
        </tr>
      </thead>
      <tbody>
        {
          <tr><td>Step 1: Please add yourself by clicking on Add User <br/>
          Step 2: you can see if you are added Successfully in show All User<br/>
          Step 3: you can see if you are added Successfully in show All User<br/>
          Step 4: you can see any Active session is prsent by clicking on Active session<br/>
          Step 5: If Active session is not present, Any user can creae sessin by clicking on Create session.<br/>
          Step 6: If Active session is Present, Join the session by clicking on join session<br/>
          Step 7: Also you can see the users who has already joined the session by clicking on show session user<br/>
          Step 8: Users can add the restaurant of their choice by clicking on Add restaurant<br/>
          Step 9: User who has created the session is only allowed to terinate the session by clicking on terminate session. One randomly selected restaurantwill be selected and shown<br/>
          Step 10: Users can also see the selected restaurant by clicking on show all selected restaurant.<br/>
          <b>Step 11: Reset button will reset the system to default state and delete the browser local storage manually </b> </td></tr>  
        }
      </tbody>
    </Table>
  );
}

export default Home;