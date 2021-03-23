import React from 'react';
import WithAuth from '../components/WithAuth';

const Auth = ({ logOut }) => {
  return (
    <>
      <h1>Auth</h1>
      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default WithAuth(Auth);