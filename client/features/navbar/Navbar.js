import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {

  return (
    <div>
      <nav>
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link> Fun Facts</Link>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
