import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <>
      <footer className='page-footer'>
        <div className='container'>
          <div className='footer-bottom'>
            <div className='row'>
              <div className='footer-social'>
                <ul>
                  <li>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='ri-facebook-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.youtube.com/'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='ri-youtube-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.youtube.com/imdb'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='ri-youtube-fill'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <div className='container'>
            <p className='para'>
              Copyright ©
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
