import React, { Component } from 'react';
import './header.css'
import PropTypes from 'prop-types';

const Header = ({title, isSelected}) => 
  <div className="header">
    <h1 className={isSelected ? "selected" : ""}>
      {title}
    </h1>
  </div>

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default Header;