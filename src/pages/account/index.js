import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroAccount from './HeroAccount';

const Account = ({user, setUser}) => {
    const navigate = useNavigate();
  const [logout, setLogout] = useState(false);


  const handleLogout = () => {
    setLogout(true);
  };

  if (logout) {
    navigate("/login");
  }

  return (
    <>
      <HeroAccount />

      {user ? (
        <div className="container">
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      ) : navigate("/login")}
    </>
  );
}

export default Account;