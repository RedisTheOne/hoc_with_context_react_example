import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

export default function LogIn() {
  const [isAuthed, setIsAuthed] = useState(false);

  const logIn = () => {
    localStorage.setItem('TOKEN', '1');
    setIsAuthed(true);
  };

  if(isAuthed) {
    return <Redirect to={'/auth'} />;
  }
  
  return <button onClick={logIn}>Log In</button>;
}