import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [dataFrom, setDataFrom] = useState({})
  const [err, setErr] = useState([])
  const [disabled, setDisabled] = useState(true)

  const handleOnchange = (event) => {
    const { name, value } = event.target
    dataFrom[name] = value
    if (name !== "message") {
      if (value === "") {
        err.push(name)
        setErr([...err])
        setDisabled(true)
      } else {
        const index = err.indexOf(name);
        if (index > -1) {
          err.splice(index, 1);
        }
        setErr([...err])
      }
    }
    if (err.length === 0 && dataFrom.hasOwnProperty("name") && dataFrom.hasOwnProperty("phone") && dataFrom.hasOwnProperty("email")) {
      setDisabled(false)
    }
  }

  const handleOnBlur = (event) => {
    const { name, value } = event.target
    if (name !== "message") {
      if (value === "") {
        err.push(name)
        setErr([...err])
        setDisabled(true)
      }
    }
  }
  const hanldeOnSubmit = () => {
    axios({
      method: "post",
      url: `/api/touch-potential-member`,
      data: dataFrom
    })
      .then(function (response) {
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('userMessage').value = '';
        setDisabled(true)
        setDataFrom({})
        alert('Thank you for getting in touch!');
      })
      .catch(function (error) {});
  }
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
                  <p className='pt-5'>TOGETHER WE ACHIEVE EXTRAORDINARY</p>
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
                    <a
                      className='white'
                      href='https://wa.me/60106510906'
                      rel='noopener noreferrer'
                      target='_blank'
                    >010-6510906</a>
                  </p>
                </div>
                <p>Email: support@vkidstrendsb.com</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-9'>
            <div className='map-canvas'>
              <iframe
                title='video'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1883229891073!2d101.61879261475708!3d3.0441513977831347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b59fd886941%3A0x4042bcc667b1b99e!2sVKIDS%20TREND%20SDN%20BHD%20(HQ)!5e0!3m2!1sen!2s!4v1615963535776!5m2!1sen!2s'
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
                <h2 className='text-title font-weight-700 text-uppercase'>Get in touch</h2>
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
                  <input id='name' className='my-2' type='text' placeholder='Name*' name='name' onChange={handleOnchange} onBlur={handleOnBlur} />
                  {err.includes("name") ? <p className="error">Name is required!</p> : ''}
                </div>
                <div className='col-12 col-md-4'>
                  <input id='phone' className='my-2' type='text' placeholder='Phone*' name='phone' onChange={handleOnchange} onBlur={handleOnBlur}/>
                  {err.includes("phone") ? <p className="error">Phone is required!</p> : ''}
                </div>
                <div className='col-12 col-md-4'>
                  <input id='email' className='my-2' type='text' placeholder='Email*' name='email' onChange={handleOnchange} onBlur={handleOnBlur} />
                  {err.includes("email") ? <p className="error">Email is required!</p> : ''}
                </div>
                <div className='col-12'>
                  <textarea
                    className='my-2'
                    name='message'
                    id='userMessage'
                    rows='4'
                    placeholder='Message'
                    name='message'
                    onChange={handleOnchange}
                  ></textarea>
                </div>
                <div className='col-6'>
                  <button  className={"default-btn px-5 white my-1 " + (disabled ? "disabled" : "")} onClick={disabled ? () => {} : hanldeOnSubmit}>Send</button>
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
                  <h3 className='py-4 font-weight-700 text-uppercase'>PENANG OFFICE</h3>
                  <p>72-3-59, Arena Curve, Jalan Mahsuri, 11950 Bayan Lepas, Penang.</p>
                </div>
                <div className='contact-info d-inline-block '>
                  <p className='d-flex'>
                    <i className='icon-phone-white mr-2'></i>General Line: &nbsp;010-2775678</p>
                  <p className='d-flex'>
                    <i className='icon-whatsapp-white mr-2'></i>WhatsApp: &nbsp;
                    <a
                      className='white'
                      target='_blank'
                      href='https://wa.me/60106510906'
                      rel='noopener noreferrer'
                    >010-6510906</a>
                  </p>
                </div>
                <p>Email: support@vkidstrendsb.com</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-9 order-md-1'>
            <div className='map-canvas'>
              <iframe
                title='video'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.594404546844!2d100.27781971476486!3d5.325781896136614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac131bae56441%3A0xb0efd4b2e2a49f94!2sVKids%20Trend%20Sdn%20Bhd%20(PG)!5e0!3m2!1sen!2s!4v1615963558760!5m2!1sen!2s'
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
