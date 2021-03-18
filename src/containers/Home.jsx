import React, { useContext } from 'react';

import { GeneralContext } from '../context/General';
import Layout from '../components/Layout';

function Home() {
  const { title, status } = useContext(GeneralContext);
  return (
    <>
      <h1>{title}</h1>
      <p>{status}</p>
    </>
  );
}

export default Layout(Home);