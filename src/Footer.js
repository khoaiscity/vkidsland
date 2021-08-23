import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router';

function Footer() {
  let loc = useLocation();
  useEffect(() => {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/slick.js?v=' + new Date().getTime();
    document.getElementById('slick-script').innerText = '';
    document.getElementById('slick-script').appendChild(script);
  }, [loc]);

  const [term, setTerm] = useState(null);

  useEffect(() => {
    if (term === null) {
      fetch('api/system-static-setting?type=term-and-conditions&key=privacy&key=code-of-ethics&key=term-of-use&key=income&key=social-media&key=general&key=distributor-rule-and-regulation')
        .then((response) => response.json())
        .then((response) => setTerm(response.data));
    }
  }, [term]);

  return (
    <footer className='py-4 bg-default'>
      <div className='container text-left'>
        <div className='row footer-media d-flex align-items-center'>
          <div className='col-md-10 col-8'>
            <div className='d-flex flex-column flex-md-row'>
              {term && term.length &&
              term.map((item, index) => (
                // <button type='button' data-toggle='modal'>{item.Value.Name}</button>
                <a href='#footer' data-toggle='modal' data-target={'.term-modal-lg-' + index}> <span
                  style={{'font-size': '0.8rem', 'white-space': 'nowrap'}} className='px-1'>{item.Value.Name}</span> </a>
              ))
              }
            </div>
            <div className='reserved pt-2 px-2'>AJL932213 | © 2021 VKIDS TREND. All Rights Reserved</div>
          </div>

          {term && term.length && term.map((item, index) => (
            <div
              className={'modal fade term-modal-lg-' + index}
              tabIndex='-1'
              role='dialog'
              aria-labelledby='myLargeModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog modal-lg'>
                <div className='modal-content term-modal-content'>
                  <div className='title'>{item.Value.Name}</div>
                  <div className='content' dangerouslySetInnerHTML={{__html: item.Value.Value}}></div>
                </div>
              </div>
            </div>
          ))}

          <div className='col-md-2 col-4' style={{'top': '19px'}}>
            <div className='text-right'>
              <ul className='list-unstyled list-inline'>
                <li className='list-inline-item'>
                  <a className='btn-floating btn-sm' href='https://www.facebook.com/vkidstrendsb'> <img
                    className='icon-fb-footer' src='assets/icons/facebook-circular-logo.svg' alt='facebook'/> </a> <a
                  className='btn-floating btn-sm' href='https://www.youtube.com/channel/UCG4d6XVAfUctT91blHb5VyQ'> <img
                  className='icon-fb-footer' src='assets/icons/youtube-circular-logo.svg' alt='youtube'/> </a>
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
