import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // We will create this next for styling

function UserList() {
  // 1. Use useState to save data into listOfUser state
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Use axios to Get data inside useEffect hooks
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means it runs only once on mount

  return (
    <div className="user-list-container">
      <h1>User Directory</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        // 3. Map listOfUser to display list of user into screen
        <ul className="user-grid">
          {listOfUser.map((user) => (
            <li key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p className="username">@{user.username}</p>
              <p className="email">📧 {user.email}</p>
              <p className="company">🏢 {user.company.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;