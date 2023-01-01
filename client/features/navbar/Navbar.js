import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {

  return (
    <div>
      <nav>
          <div>
          {/* <i className="fa fa-home" aria-hidden="true"></i> */}

            <Link to="/home">Home</Link>
            <Link> Projects</Link>
            <Link> 30 Day Challenge</Link>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
