import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const resourceURL = process.env.REACT_APP_RESOURCE_URL;

  const [headerSlider, setHeaderSlider] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  const [introVideos, setIntroVideos] = useState(null);
  const [hallOfFame, setHallOfFame] = useState(null);
  const [ourProduct, setOurProduct] = useState(null);
  const [teamManager, setTeamManager] = useState(null);
  const [award, setAward] = useState(null);

  useEffect(() => {
    if (headerSlider === null) {
      fetch('/api/slider?page=home&key=header-banner')
        .then((response) => response.json())
        .then((response) => setHeaderSlider(response.data));
    }
  }, [headerSlider]);

  useEffect(() => {
    if (mainVideo === null) {
      fetch('/api/slider?page=home&key=intro-video')
        .then((response) => response.json())
        .then((response) => setMainVideo(response.data[0]));
    }
  }, [mainVideo]);

  useEffect(() => {
    if (introVideos === null) {
      fetch('/api/slider?page=home&key=company-video')
        .then((response) => response.json())
        .then((response) => setIntroVideos(response.data));
    }
  }, [introVideos]);

  useEffect(() => {
    if (hallOfFame === null) {
      fetch('/api/slider?page=home&key=hall-of-fame')
        .then((response) => response.json())
        .then((response) => setHallOfFame(response.data));
    }
  }, [hallOfFame]);

  useEffect(() => {
    if (ourProduct === null) {
      fetch('/api/slider?page=home&key=our-product')
        .then((response) => response.json())
        .then((response) => setOurProduct(response.data));
    }
  }, [ourProduct]);

  useEffect(() => {
    if (teamManager === null) {
      fetch('/api/team-manager')
        .then((response) => response.json())
        .then((response) => setTeamManager(response.data));
    }
  }, [teamManager]);

  useEffect(() => {
    if (award === null) {
      fetch('/api/award')
        .then((response) => response.json())
        .then((response) => setAward(response.data));
    }
  }, [award]);

  return (
    <>
      {headerSlider && (
        <section className='main-landing-section'>
          <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-ride='carousel'
          >
            <ol className='carousel-indicators'>
              {headerSlider.map((item, index) => (
                <li
                  key={index}
                  data-target='#carouselExampleIndicators'
                  data-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                ></li>
              ))}
            </ol>

            <div className='carousel-inner'>
              {headerSlider &&
                headerSlider.map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    key={item.ID}
                  >
                    <div
                      className='carousel-image'
                      style={{
                        background:
                          'url(' +
                          resourceURL +
                          item.Path +
                          ') no-repeat center center',
                      }}
                    ></div>
                  </div>
                ))}
            </div>

            <div className='carousel-caption'>
              <NavLink className='text-uppercase white style2-btn' to='about'>
                About Us
              </NavLink>
            </div>
            <a
              className='banner-prev carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='banner-next carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </section>
      )}

      <section className='about-us-section bg-white full-height'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3 pb-3'>
              <div className='text-uppercase text-left black pb-3'>
                <h2 className='font-weight-900 pt-4'>About Company</h2>
                <hr />
                <p className='line-hg-2 pt-2'>
                  Maximize the Power of Internet Technology with Education.
                </p>
              </div>
              <a
                className='default-btn text-uppercase white'
                href='#vkid-banner-video'
              >
                Watch Video
              </a>
            </div>
            <div className='col-12 col-lg-9 pt-3'>
              <img
                src='assets/images/about-company/about_company.jpg'
                alt='About Us'
              />
            </div>
          </div>
        </div>
      </section>

      {mainVideo && (
        <section id='vkid-banner-video' className='video-banner-section'>
          <div className='video-wrap'>
            <div className='embed-responsive embed-responsive-16by9 js-videoWrapper mb-2'>
              <iframe
                title='video'
                id='vkid-video'
                className='embed-responsive-item js-videoIframe'
                src=''
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope;'
                data-src={resourceURL + mainVideo.Path}
              ></iframe>

              <div
                className='videoPoster js-videoPoster'
                style={{
                  backgroundImage: `url(${resourceURL + mainVideo.Cover})`,
                }}
              >
                <div className='videoPoster_overlay_hover'>
                  <i className='video_play fa fa-play'></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Management Team */}
      <section className='team-section bg-white py-4 full-height'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <div className='text-uppercase text-left black pb-2'>
                <h2 className='font-weight-900 pt-4'>Management Team</h2>
                <hr />
                <p className='line-hg-2 font-09'>
                  An internet based education business company lead by 3
                  founders which provides a platform for Malaysian students
                  ranging from Pre-school - Secondary Form 5, believes
                  e-learning is a New Age Learning for all Malaysian students
                  today!
                </p>
              </div>
            </div>
            {teamManager && teamManager.length && (
              <div className='col-12 col-lg-9'>
                <div className='row'>
                  {teamManager.map((item, index) => (
                    <div className='col-12 col-lg-4'>
                      <div className='team-content'>
                        <div className='team-content-overlay'></div>
                        <img
                          className='team-content-image'
                          src={resourceURL + item.HalfBodyPhoto}
                          alt={item.Name}
                        />
                        <div className='team-content-details fadeIn-bottom'>
                          <h4 className='team-content-title font-weight-bold'>
                            {item.Name}
                          </h4>
                          <p className='team-content-text'>{item.Position}</p>
                          <div className='hw'></div>
                          <p className='team-content-info py-3'>
                            {item.Intro}
                            <br />
                            {item.Intro2}
                          </p>
                          <NavLink
                            className='style1-btn'
                            to={'/partner' + (index + 1)}
                          >
                            Read More
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Product */}
      {ourProduct && ourProduct.length && (
        <section className='product-bg-parallax products-section full-height'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='products-section-header text-center text-uppercase'>
                  <h1>Our Products</h1>
                  <hr style={{ margin: 'auto' }} />
                </div>
              </div>
            </div>
            <div className='product-slider'>
              {ourProduct.map((item, index) => (
                <div className='card-container'>
                  <a
                    href='/products'
                    rel='noopener noreferrer'
                  >
                    <div className='product-card pb-5'>
                      <img src={resourceURL + item.Path} alt='Product' />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awards & Recognition */}
      {award && award.length && (
        <section className='awards-section full-height'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='awards-section-header text-center text-uppercase'>
                  <h1>Awards & Recognition</h1>
                  <hr style={{ margin: 'auto' }} />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div
                  id='carouselExampleIndicators2'
                  className='carousel slide service'
                  data-ride='carousel'
                >
                  <div className='carousel-inner'>
                    {award.map((item, index) => (
                      <div
                        className={
                          'carousel-item ' + (index === 0 ? 'active' : '')
                        }
                      >
                        <div className='row'>
                          <div className='col-md-5 col-sm-12 pb-2'>
                            <div className='bounceInLeft'>
                              <div className='awards-section-content text-center black'>
                                <div className='py- awards-header'>
                                  <h5 className='font-weight-bold'>
                                    {item.Title}
                                  </h5>
                                </div>
                                <div className='awards-content'>
                                  <span>{item.Description}</span>
                                </div>
                                {item.Video && (
                                  <button
                                    type='button'
                                    className='btn-video green py-3'
                                    data-toggle='modal'
                                    data-target={
                                      '.bd-example-modal-lg-' + index
                                    }
                                  >View Video <i className='fa fa-play-circle px-1'></i>
                                  </button>
                                )}
                                {item.isSliderPhoto && (<button
                                  type='button'
                                  className='btn-video green px-2 py-3'
                                  data-toggle='modal'
                                  data-target={'.bd-example-modal-lg-slider-'+index}
                                >View Photo <i className='fa fa-play-circle px-1'></i></button>)}
                                <div className='awards-img pt-2'>
                                  <img src={resourceURL + item.Logo} alt='' />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-7 col-sm-12 pb-0'>
                            <div className='bounceInRight'>
                              <img src={resourceURL + item.Photo} alt='' />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    className='awards-prev carousel-control-prev black'
                    href='#carouselExampleIndicators2'
                    role='button'
                    data-slide='prev'
                  >
                    <span
                      className='carousel-control-prev-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a
                    className='awards-prev carousel-control-next black'
                    href='#carouselExampleIndicators2'
                    role='button'
                    data-slide='next'
                  >
                    <span
                      className='carousel-control-next-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Popup video */}
      {award &&
        award.length &&
        award.map(
          (item, index) =>
            item.Video && (
              <div
                className={'modal fade bd-example-modal-lg-' + index}
                tabIndex='-1'
                role='dialog'
                aria-labelledby='myLargeModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg'>
                  <div className='modal-content'>
                    <video
                      poster='assets/images/video/reward_p01-videothumb.jpg'
                      id={'player' + index}
                      controls
                    >
                      <source src={resourceURL + item.Video} type='video/mp4' />
                    </video>
                  </div>
                </div>
              </div>
            )
        )}

      {/* Popup slider photo */}
      {award &&
      award.length &&
      award.map(
          (item, index) =>
              item.isSliderPhoto && (<div
        className={'modal fade bd-example-modal-lg-slider-'+index}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content modal-content-slider bg-green'>
            <section className='ambassador-section'>
              <div className='ambassador-container'>
                <div className='container'>
                  {/* Slider sample */}
                  <div className='slickAmbassador'>
                    {item.sliderPhoto &&
                    item.sliderPhoto.length &&
                    item.sliderPhoto.map((item, index) => (
                        <div className='amd-content text-center'>
                          <div className='amd-portrait'>
                            <img
                              className='m-auto'
                              src={resourceURL + item}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Slider sample */}
          </div>
        </div>
      </div>
              )
      )}

      {/* Hall of fame */}
      {hallOfFame && hallOfFame.length && (
        <section className='ambassador-section bg-green full-height'>
          <div className='ambassador-container'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12 py-5'>
                  <div className='ambassador-section-header text-center text-uppercase'>
                    <h1 className='pb-2'>Leaders</h1>
                    <div className='hw'></div>
                  </div>
                </div>
              </div>
              <div className='slickAmbassador'>
                {hallOfFame.map((item, index) => (
                  <div className='amd-content text-center'>
                    <div className='amd-portrait'>
                      <img
                        className='m-auto'
                        src={resourceURL + item.Path}
                        alt='REMY & DERLIN'
                      />
                    </div>
                    <p className='white'>&nbsp;</p>
                  </div>
                ))}
              </div>
              {/*<div className='ribbon-container text-center'>*/}
              {/*  <div className='pt-5'>*/}
              {/*    <p className='pb-1'>Let’s join VKids Trend big family.</p>*/}
              {/*    <br />*/}
              {/*    <NavLink className='style-link-btn' to='/contact'>Join us</NavLink>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </section>
      )}

      {/* Slider of Intro Video */}
      {introVideos &&
        introVideos.length &&
        introVideos.map((item, index) => (
          <div
            key={index}
            className={'modal fade reward-modal-lg-' + index}
            tabIndex='-1'
            role='dialog'
            aria-labelledby='myLargeModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-lg slickIntroVideo'>
              <div className='modal-content'>
                <video
                  poster={resourceURL + item.Cover}
                  id={'slider-player' + index}
                  playsInline
                  controls
                >
                  <source src={resourceURL + item.Path} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        ))}

      <section className='video-award-bg-parallax products-section full-height'>
        <div className='container'>
          <div className='video-award-slider'>
            {introVideos &&
              introVideos.length &&
              introVideos.map((item, index) => (
                <div className='card-container' key={index}>
                  <a
                    href='https://www.vschooltrend.com/'
                    data-toggle='modal'
                    data-target={'.reward-modal-lg-' + index}
                  >
                    <div
                      className='product-card'
                      style={{ position: 'relative' }}
                    >
                      <img src={resourceURL + item.Cover} alt='video award 2' />
                      <div className='videoplay-overlay'>
                        <i className='video_play fa fa-play'></i>
                      </div>
                    </div>
                    <h1 className='pt-4 text-content font-weight-700 text-uppercase text-center'>
                      {item.Title}
                    </h1>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id='contact-us-section' className='bg-green'>
        <div className='row no-gutters'>
          <div className='col-12 col-md-6 contact-vh bg-getintouch'>
            <div className='mx-auto'>
              <div className='address-component bg-white p-5'>
                <div className='address-container text-center black'>
                  <div className='address-header pb-4'>
                    <img src='assets/icons/vkid-logo-black.png' alt='VKid' />
                    <hr style={{ margin: 'auto' }} />
                  </div>
                  <div className='headquater-content'>
                    <h2 className='text-uppercase'>HEADQUARTERS</h2>
                    <p>
                      25A, Jalan Kenari 2, Bandar Puchong Jaya,
                      <br />
                      47100 Puchong, Selangor.
                    </p>
                  </div>
                  <div className='branch-content'>
                    <h2 className='text-uppercase'>PENANG OFFICE</h2>
                    <p>
                      72-3-59, Arena Curve, Jalan Mahsuri,
                      <br />
                      11950 Bayan Lepas, Penang.
                    </p>
                    <div className='contact-number d-inline-block '>
                      <p className='d-flex'>
                        <i className='icon-phone mr-2'></i>
                        General Line: &nbsp;010-2775678
                      </p>
                      <p className='d-flex'>
                        <i className='icon-whatsapp mr-2'></i>
                        WhatsApp: &nbsp;
                        <a
                          className='black'
                          href='https://wa.me/60106510906'
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          010-6510906
                        </a>
                      </p>
                    </div>
                    <p className='py-2'>Email: support@vkidstrendsb.com</p>
                  </div>
                  <a href='https://www.facebook.com/vkidstrendsb'>
                    <img
                      className='icon-fb'
                      src='assets/icons/facebook-circular-logo.svg'
                      alt='facebook'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='p-5'>
              <div className='contact-container py-4'>
                <h1 className='white'>Get in touch</h1>
                <p>
                  Our team is here to provide you with more information and
                  answer any questions you may have. Fill out the form and we’ll
                  be in touch as soon as possible. Please feel free to send us
                  an email or even give us a call at 010-2775678
                </p>
                <div className='contact-form'>
                  <input className='my-2' type='text' placeholder='Name*' />
                  <input className='my-2' type='text' placeholder='Phone*' />
                  <input className='my-2' type='text' placeholder='Email*' />
                  <textarea
                    className='my-2'
                    name='message'
                    id='userMessage'
                    rows='4'
                    placeholder='Message'
                  ></textarea>
                  <button className='contact-send-btn style1-btn my-1'>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
