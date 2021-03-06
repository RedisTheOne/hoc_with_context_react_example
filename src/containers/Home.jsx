import React, { useContext } from 'react';

import { GeneralContext } from '../context/General';
import Layout from '../components/Layout';

function Home({ className }) {
  const { title, status } = useContext(GeneralContext);
  return (
    <div className={className}>
      <h1>HOME</h1>
      <p style={{ float: 'right', marginRight: 10 }}>{title}: {status}</p>
    </div>
  );
}

export default Layout(Home);