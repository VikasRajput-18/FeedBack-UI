import React from "react";
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <NavLink to="/" className='goback'>
      <h1 className="header">FeedBack UI</h1>
    </NavLink>
  );
};

// Header.defaultProps = {
//     text : "Hello World!",
// }

// Header.propTypes = { text : PropTypes.number}

export default Header;
