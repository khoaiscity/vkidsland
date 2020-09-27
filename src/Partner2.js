import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Partner2() {
  return (
    <>
      <section className='banner-section bg-partner2'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'></div>
              <div className='col-12 col-md-6'>
                <div className='banner-title text-center text-uppercase'>
                  <h2>DR. DENISE LIM</h2>
                  <div className='hw'></div>
                  <p className='pt-5'>MD & CO-FOUNDER</p>
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
                  DR. DENISE LIM MESSAGE
                </h2>
                <hr />
                <p className='text-content pt-4'>MD & CO-FOUNDER</p>
              </div>
            </div>
            <div className='col-12 col-lg-8 pt-5'>
              <div className='text-uppercase black'>
                <p className='font-2'>
                  Your Thoughts & Actions Determine Your Future.
                </p>
                <p className='font-2'>你的思想与行动决定你的未来</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='partner-img-slider'>
          <img
            src='assets/images/dr_denise/dr-denise-photo01.jpg'
            alt='Img Denise 1'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo02.jpg'
            alt='Img Denise 2'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo03.jpg'
            alt='Img Denise 3'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo04.jpg'
            alt='Img Denise 4'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo05.jpg'
            alt='Img Denise 5'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo06.jpg'
            alt='Img Denise 6'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo07.jpg'
            alt='Img Denise 7'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo08.jpg'
            alt='Img Denise 8'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo09.jpg'
            alt='Img Denise 9'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo10.jpg'
            alt='Img Denise 10'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo11.jpg'
            alt='Img Denise 11'
          />
          <img
            src='assets/images/dr_denise/dr-denise-photo12.jpg'
            alt='Img Denise 12'
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
                    src='assets/images/member1-vivian.jpg'
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
                  <img src='assets/images/member3-eric.jpg' alt='Eric' />
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
