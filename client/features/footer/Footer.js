import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Footer = () => {

  return (
    <div>
      <nav>
          <div>
          <i className="fa-brands fa-css3-alt" aria-hidden="true"></i>
          <i className="fa-brands fa-html5" aria-hidden="true"></i>
          <i className="fa-brands fa-react" aria-hidden="true"></i>
          <i className="fa-brands fa-react" aria-hidden="true"></i>
          <i className="fa-brands fa-react" aria-hidden="true"></i>
          <i className="fa-brands fa-react" aria-hidden="true"></i>
          <i className="fa-brands fa-node-js" aria-hidden="true"></i>
          </div>
      </nav>
    </div>
  );
};

export default Footer;