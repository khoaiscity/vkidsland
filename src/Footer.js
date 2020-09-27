import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

function Footer() {
  let loc = useLocation();
  useEffect(() => {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/slick.js?v=' + new Date().getTime();
    document.getElementById('slick-script').innerText = '';
    document.getElementById('slick-script').appendChild(script);
  }, [loc]);

  return (
    <footer className='py-4 bg-default'>
      <div className='container text-left'>
        <div className='row footer-media d-flex align-items-center'>
          <div className='col-md-7 col-8'>
            <div className='d-flex flex-column flex-md-row'>
              <a href='#footer'>
                <span className='px-2'>Term & Conditions </span>
              </a>
              <a href='#footer'>
                <span className='px-2'>Privacy Policy</span>
              </a>
              <a href='#footer'>
                <span className='px-2'>Social Media Privacy Policy</span>
              </a>
            </div>
            <div className='reserved pt-2 px-2'>
              AJL932213 | © 2020 VKIDS TREND. All Rights Reserved
            </div>
          </div>

          <div className='col-md-5 col-4'>
            <div className='text-right'>
              <ul className='list-unstyled list-inline'>
                <li className='list-inline-item'>
                  <a
                    className='btn-floating btn-sm mx-1'
                    href='https://www.facebook.com/vkidstrendsb'
                  >
                    <img
                      className='icon-fb-footer'
                      src='assets/icons/facebook-circular-logo.svg'
                      alt='facebook'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
