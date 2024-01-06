import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroAccount from './HeroAccount';
import OurServices from '../../components/OurServices';
import Packages from '../../components/Packages';

const Account = ({ user }) => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {}, [user]);

  const handleLogout = () => {
    setLogout(true);
  };

  if (logout) {
    navigate('/login');
  }

  return (
    <>
      <HeroAccount />

      {user ? (
        <>
        <div className="container mt-5">
          <div className="card mx-auto" style={{ maxWidth: '400px' }}>
            <div className="card-header">
              <h3 className="card-title text-center">Welcome, {user.username}!</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                <strong>Email:</strong> {user.email}
              </p>
              <button className="btn btn-primary w-100" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <OurServices />
        <Packages />
        </>
      ) : (
        navigate('/register')
      )}
    </>
  );
};

export default Account;