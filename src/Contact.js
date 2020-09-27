import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <section className='banner-section bg-contact'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='banner-title ptb-50 text-center text-uppercase'>
                  <h1>Contact us</h1>
                  <div className='hw'></div>
                  <p className='pt-5'>
                    ALL FOR ONE, AND ONR FOR ALL. SUCCESS BECOMES YOU.
                    <br />
                    LET US HELP YOU BECOME A SUCCESS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='headquarter-section'>
        <div className='row no-gutters'>
          <div className='col-12 col-md-3'>
            <div id='headquarter' className='bg-green'>
              <div className='p-7-5 text-center'>
                <img src='/assets/icons/vkid-logo.png' alt='Logo' />
                <div className='hw'></div>
                <div className='address-content pt-3'>
                  <h3 className='py-4 font-weight-700 text-uppercase'>
                    HEADQUARTERS
                  </h3>
                  <p>
                    25A, Jalan Kenari 2, Bandar Puchong Jaya, 47100 Puchong,
                    Selangor.
                  </p>
                </div>
                <div className='contact-info d-inline-block '>
                  <p className='d-flex'>
                    <i className='icon-phone-white mr-2'></i>
                    General Line: &nbsp;010-2775678
                  </p>
                  <p className='d-flex'>
                    <i className='icon-whatsapp-white mr-2'></i>
                    WhatsApp: &nbsp;
                    <Link
                      className='white'
                      to='https://wa.me/60106510906'
                      target='_blank'
                    >
                      010-6510906
                    </Link>
                  </p>
                </div>
                <p>
                  Email:{' '}
                  <Link
                    className='__cf_email__'
                    data-cfemail='7e1d0b0d0a11131b0c0d1b0c08171d1b3e0815171a0d0a0c1b101a0d1c501d1113'
                    to='/cdn-cgi/l/email-protection'
                  >
                    [email&#160;protected]
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-9'>
            <div className='map-canvas'>
              <iframe
                title='video'
                src='https://maps.google.com/maps?q=25A%2C%20Jalan%20Kenari%202%2C%20Bandar%20Puchong%20Jaya%2C%2047100%20Puchong%2C%20Selangor.&t=&z=13&ie=UTF8&iwloc=&output=embed'
                width='600'
                height='450'
                frameBorder='0'
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section
        id='getintouch-section'
        className='ptb-150 bg-getintouch-parallax'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <div className='text-left white'>
                <h2 className='text-title font-weight-700 text-uppercase'>
                  Get in touch
                </h2>
                <hr />
                <p className='line-hg-1 pt-4'>
                  Our team is here to provide you with more information and
                  answer any questions you may have. Fill out the form and we’ll
                  be in touch as soon as possible. Please feel free to send us
                  an email or even give us a call at 010-2775678
                </p>
              </div>
            </div>
            <div className='col-12 col-md-8'>
              <div className='row contact-form'>
                <div className='col-12 col-md-4'>
                  <input className='my-2' type='text' placeholder='Name*' />
                </div>
                <div className='col-12 col-md-4'>
                  <input className='my-2' type='text' placeholder='Phone*' />
                </div>
                <div className='col-12 col-md-4'>
                  <input className='my-2' type='text' placeholder='Email*' />
                </div>
                <div className='col-12'>
                  <textarea
                    className='my-2'
                    name='message'
                    id='userMessage'
                    rows='4'
                    placeholder='Message'
                  ></textarea>
                </div>
                <div className='col-6'>
                  <button className='default-btn px-5 white my-1'>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='headquarter-section bg-white'>
        <div className='row no-gutters'>
          <div className='col-12 col-md-3 order-md-2'>
            <div id='branch' className='bg-green'>
              <div className='p-7-5 text-center'>
                <img src='/assets/icons/vkid-logo.png' alt='Logo' />
                <div className='hw'></div>
                <div className='address-content pt-3'>
                  <h3 className='py-4 font-weight-700 text-uppercase'>
                    PENANG OFFICE
                  </h3>
                  <p>
                    72-3-59, Arena Curve, Jalan Mahsuri, 11950 Bayan Lepas,
                    Penang.
                  </p>
                </div>
                <div className='contact-info d-inline-block '>
                  <p className='d-flex'>
                    <i className='icon-phone-white mr-2'></i>
                    General Line: &nbsp;010-2775678
                  </p>
                  <p className='d-flex'>
                    <i className='icon-whatsapp-white mr-2'></i>
                    WhatsApp: &nbsp;
                    <Link
                      className='white'
                      target='_blank'
                      to='https://wa.me/60106510906'
                    >
                      010-6510906
                    </Link>
                  </p>
                </div>
                <p>
                  Email:{' '}
                  <Link
                    to='/cdn-cgi/l/email-protection'
                    className='__cf_email__'
                    data-cfemail='2645535552494b4354554354504f454366504d4f4255525443484255440845494b'
                  >
                    [email&#160;protected]
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-9 order-md-1'>
            <div className='map-canvas'>
              <iframe
                title='video'
                src='https://maps.google.com/maps?q=72-3-59%2C%20Arena%20Curve%2C%20Jalan%20Mahsuri%2C%20%2011950%20Bayan%20Lepas%2C%20Penang.&t=&z=13&ie=UTF8&iwloc=&output=embed'
                width='600'
                height='450'
                frameBorder='0'
                order='0'
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
