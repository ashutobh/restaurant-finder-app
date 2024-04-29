import '../App.css'

import {useState} from 'react';

const ShowAllUsers11 = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        'http://localhost:8080/restaurant/api/v1/showAllUsers',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(
        'result is: ',
        JSON.stringify(result, null, 4),
      );

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Show All Users</button>

      {isLoading && <h2>Loading...</h2>}

      {data && data.users && data.users.map(user => {
        return (
          <div key={user.emailAddress}>
            <h2>{user.emailAddress}</h2>
            <h2>{user.firstName}</h2>
            <h2>{user.lastName}</h2>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllUsers11;