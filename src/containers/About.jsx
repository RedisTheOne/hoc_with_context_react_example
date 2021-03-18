import React, { useContext } from 'react';

import { GeneralContext } from '../context/General';
import Layout from '../components/Layout';

const About = () => {
  const { title, status } = useContext(GeneralContext);
  return (
    <div>
      <h1>About</h1>
      <p style={{ float: 'right', marginRight: 10 }}>{title}: {status}</p>
    </div>
  );
};

export default Layout(About);