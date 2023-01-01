import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome</h3>
      <div>Hi, I am Grace! I recently graduated from Fullstack Academy and I am very excited to start a career as a software developer.
        Check out my projects and my 30 day coding challenge!
      </div>
    </div>
  );
};

export default Home;
