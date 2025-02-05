import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MainBanner = () => {
  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h4 className="sub-title">MOVIE.GE</h4>
          <h2 className="title">უყურე {<span>ფილმებს</span>} უმაღლეს ხარისხში.</h2>
          <Link className="btn" to='/#Movies'>
          <i className="ri-arrow-right-line"></i>
            ფილმების არჩევა
          </Link>
        </div>
      </div>
    </header>
  )
}

export default MainBanner;