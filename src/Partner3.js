import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Partner3() {
  return (
    <>
      <section className='banner-section bg-partner3'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='banner-title text-center text-uppercase'>
                  <h2>DR. ERIC ANG</h2>
                  <div className='hw'></div>
                  <p className='pt-5'>COO & CO-FOUNDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='partner-details-section bg-white p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-4 pt-3'>
              <div className='partner-details text-uppercase text-left black'>
                <h2 className='text-title font-weight-900'>
                  DR. ERIC ANG MESSAGE
                </h2>
                <hr />
                <p className='text-content pt-4'>COO & CO-FOUNDER</p>
              </div>
            </div>
            <div className='col-12 col-lg-8 pt-5'>
              <div className='text-uppercase black'>
                <p className='font-2'>
                  There Are No Speed Limits On The Road Of Success.
                </p>
                <p className='font-2'>成功之路，没有速度的极限。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='partner-img-slider'>
          <img
            src='/assets/images/dr_eric/dr-eric-photo01.jpg'
            alt='Img Eric 1'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo02.jpg'
            alt='Img Eric 2'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo03.jpg'
            alt='Img Eric 3'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo04.jpg'
            alt='Img Eric 4'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo05.jpg'
            alt='Img Eric 5'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo06.jpg'
            alt='Img Eric 6'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo07.jpg'
            alt='Img Eric 7'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo08.jpg'
            alt='Img Eric 8'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo09.jpg'
            alt='Img Eric 9'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo10.jpg'
            alt='Img Eric 10'
          />
          <img
            src='/assets/images/dr_eric/dr-eric-photo11.jpg'
            alt='Img Eric 11'
          />
        </div>
      </section>

      <section className='partner-info-section bg-white py-5'>
        <div className='container'>
          <div className='row pb-5'>
            <div className='col-12'>
              <div className='partner-details text-uppercase text-left black'>
                <h2 className='text-title'>MANAGEMENT TEAM MEMBER</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div id='partner1' className='col-md-6 col-12 py-2'>
              <div className='row'>
                <div className='col-6'>
                  <img
                    src='/assets/images/member1-vivian.jpg'
                    alt='DR. VIVIAN KER'
                  />
                </div>
                <div className='col-6'>
                  <div className='partner-info black'>
                    <h3 className='font-weight-800'>DR. VIVIAN KER</h3>
                    <p>CEO & FOUNDER</p>
                    <NavLink to='partner1'>
                      <button className='default-btn white'>Read More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div id='partner2' className='col-md-6 col-12 px-2'>
              <div className='row'>
                <div className='col-6'>
                  <img src='/assets/images/member2-denise.jpg' alt='Denise' />
                </div>
                <div className='col-6'>
                  <div className='partner-info black'>
                    <h3 className='font-weight-800'>DR. DENISE LIM</h3>
                    <p>MD & CO-FOUNDER</p>
                    <NavLink to='partner2'>
                      <button className='default-btn white'>Read More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
