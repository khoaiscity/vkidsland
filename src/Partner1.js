import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Partner1() {
  return (
    <>
      <section className='banner-section bg-partner1'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='banner-title text-center text-uppercase'>
                  <h2>DR. VIVIAN KER</h2>
                  <div className='hw'></div>
                  <p className='pt-5'>Ceo & Founder</p>
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
                  DR. VIVIAN KER MESSAGE
                </h2>
                <hr />
                <p className='text-content pt-4'>CEO & FOUNDER</p>
              </div>
            </div>
            <div className='col-12 col-lg-8 pt-5'>
              <div className='text-uppercase black'>
                <p className='font-2'>You Are The Master Of Your Destiny.</p>
                <p className='font-2'>要凭着自己的努力，过自己想要的生活。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='partner-img-slider'>
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo01.jpg'
            alt='Img Vivian 1'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo02.jpg'
            alt='Img Vivian 2'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo03.jpg'
            alt='Img Vivian 3'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo04.jpg'
            alt='Img Vivian 4'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo05.jpg'
            alt='Img Vivian 5'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo06.jpg'
            alt='Img Vivian 6'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo07.jpg'
            alt='Img Vivian 7'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo08.jpg'
            alt='Img Vivian 8'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo09.jpg'
            alt='Img Vivian 9'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo10.jpg'
            alt='Img Vivian 10'
          />
          <img
            src='/assets/images/dr_vivian/dr-vivian-photo11.jpg'
            alt='Img Vivian 11'
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
                  <img src='/assets/images/member2-denise.jpg' alt='Denise' />
                </div>
                <div className='col-6'>
                  <div className='partner-info black'>
                    <h3 className='font-weight-800'>DR. DENISE LIM</h3>
                    <p>MD & CO-FOUNDER</p>
                    <NavLink to='/partner2'>
                      <button className='default-btn white'>Read More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div id='partner2' className='col-md-6 col-12 px-2'>
              <div className='row'>
                <div className='col-6'>
                  <img src='/assets/images/member3-eric.jpg' alt='Eric' />
                </div>
                <div className='col-6'>
                  <div className='partner-info black'>
                    <h3 className='font-weight-800'>DR. ERIC ANG</h3>
                    <p>COO & CO-FOUNDER</p>
                    <NavLink to='partner3'>
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
