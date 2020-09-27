import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='is-transparent'>
      <div className='header-main'>
        <div className='header-container'>
          <div className='header-wrap'>
            <nav className='navbar navbar-expand-lg navbar-bg'>
              <div className='header-logo'>
                <NavLink className='navbar-brand' to='/'>
                  <img
                    className='vkid-logo mx-1'
                    src='assets/icons/vkid-logo.png'
                    alt='logo'
                  />
                </NavLink>
              </div>

              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <i className='fa fa-bars'></i>
              </button>

              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav align-items-center ml-auto text-right text-uppercase font-weight-bold'>
                  <li className='nav-item'>
                    <NavLink className='nav-link ml-1' to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link ml-1' to='about'>
                      About Us
                    </NavLink>
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link ml-1 dropdown-toggle'
                      href='#top'
                      id='blockChain'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Management Team
                    </a>
                    <div
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <NavLink className='dropdown-item' to='/partner1'>
                        Dr.Vivian Ker
                      </NavLink>
                      <NavLink className='dropdown-item' to='/partner2'>
                        Dr.Denise Lim
                      </NavLink>
                      <NavLink className='dropdown-item' to='/partner3'>
                        Dr.Eric Ang
                      </NavLink>
                    </div>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link ml-1' to='/products'>
                      Our Products
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link ml-1' to='/contact'>
                      Contact
                    </NavLink>
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link ml-1 dropdown-toggle language'
                      href='#top'
                      id='language'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <span className='icon-language'></span>
                    </a>
                    <div
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <a href='#link' className='dropdown-item'>
                        ENGLISH
                      </a>
                      <a href='#link' className='dropdown-item'>
                        中文
                      </a>
                      <a href='#link' className='dropdown-item'>
                        Bahasa
                      </a>
                    </div>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link ml-1'
                      href='http://vkids.securelayers.cloud'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <span className='icon-personal-acc'></span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
