import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const resourceURL = process.env.REACT_APP_RESOURCE_URL;
  const apiURL = process.env.REACT_APP_PUBLIC_URL;

  const [headerSlider, setHeaderSlider] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  const [introVideos, setIntroVideos] = useState(null);

  const sampleSlider = [
    { ID: 1, Path: 'assets/images/main-banner/banner01.jpg' },
    { ID: 2, Path: 'assets/images/main-banner/banner02.jpg' },
    { ID: 3, Path: 'assets/images/main-banner/banner03.jpg' },
  ];

  useEffect(() => {
    if (headerSlider === null) {
      setHeaderSlider(sampleSlider);
      axios
        .get(`${apiURL}/api/slider?page=home&key=header-banner`)
        .then((res) => {
          if (res.status === 200) {
            const { data } = res.data;
            if (data && data.length) {
              setHeaderSlider(data);
            }
          }
        });
    }
  }, [headerSlider, sampleSlider]);

  useEffect(() => {
    if (mainVideo === null) {
      axios
        .get(`${apiURL}/api/slider?page=home&key=intro-video`)
        .then((res) => {
          if (res.status === 200) {
            const { data } = res.data;
            if (data && data.length) {
              setMainVideo(data[0]);
            }
          }
        });
    }
  }, [mainVideo]);

  useEffect(() => {
    if (introVideos === null) {
      axios.get(`${apiURL}/api/intro-video?page=home`).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          if (data && data.length) {
            setIntroVideos(data);
          }
        }
      });
    }
  }, [introVideos]);

  return (
    <>
      <section className='main-landing-section'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            {headerSlider &&
              headerSlider.map((item, index) => (
                <li
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
                        ') no-repeat center center fixed',
                    }}
                  ></div>
                </div>
              ))}
          </div>

          <div className='carousel-caption'>
            <a className='text-uppercase white style2-btn' href='about-us.html'>
              About Us
            </a>
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

      <section className='about-us-section bg-white full-height'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3 pb-3'>
              <div className='text-uppercase text-left black pb-3'>
                <h2 className='font-weight-900 pt-4'>About Company</h2>
                <hr />
                <p className='line-hg-2 pt-2'>
                  Maximize the Power of Internet Technology together with
                  Education.
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
                  An internet based education business company leading by the
                  outstanding management team which provides a platform for
                  Malaysian students ranging from standard 1 to secondary form
                  5.
                </p>
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <div className='row'>
                <div className='col-12 col-lg-4'>
                  <div className='team-content'>
                    <div className='team-content-overlay'></div>
                    <img
                      className='team-content-image'
                      src='assets/images/team-member1-vivian.jpg'
                      alt='Dr.Vivan Ker'
                    />
                    <div className='team-content-details fadeIn-bottom'>
                      <h4 className='team-content-title font-weight-bold'>
                        Dr.Vivan Ker
                      </h4>
                      <p className='team-content-text'>
                        Chief Executive Officer (CEO)
                      </p>
                      <div className='hw'></div>
                      <p className='team-content-info py-3'>
                        Dr. Vivian is the highest executive in VKids Trend,
                        whose primary responsibilities include making major
                        corporate decisions, develop high quality business
                        strategies and plans.
                      </p>
                      <a className='style1-btn' href='partner1.html'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className='team-content'>
                    <div className='team-content-overlay'></div>
                    <img
                      className='team-content-image'
                      src='assets/images/team-member2-denise.jpg'
                      alt='Dr.Denise Lim'
                    />
                    <div className='team-content-details fadeIn-bottom'>
                      <h4 className='team-content-title font-weight-bold'>
                        Dr.Denise Lim
                      </h4>
                      <p className='team-content-text'>
                        Managing Director (MD)
                      </p>
                      <div className='hw'></div>
                      <p className='team-content-info py-3'>
                        Dr. Denise is the co-founder in VKids Trend developing
                        and executing the company's business strategies.
                        Building positive and trust-based relations with
                        business partners and oversee the company’s financial
                        performance.
                      </p>
                      <a className='style1-btn' href='partner2.html'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className='team-content'>
                    <div className='team-content-overlay'></div>
                    <img
                      className='team-content-image'
                      src='assets/images/team-member3-eric.jpg'
                      alt='Dr.Eric Ang'
                    />
                    <div className='team-content-details fadeIn-bottom'>
                      <h4 className='team-content-title font-weight-bold'>
                        Dr.Eric Ang
                      </h4>
                      <p className='team-content-text'>
                        Chief Operating Officer (COO)
                      </p>
                      <div className='hw'></div>
                      <p className='team-content-info py-3'>
                        Dr.Eric Ang is the co-founder in VKids Trend oversees
                        the company's business operations. Design and implement
                        business strategies, plans and procedures.
                      </p>
                      <a className='style1-btn' href='partner3.html'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product */}
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
            <div className='card-container'>
              <a
                href='https://www.vschooltrend.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className='product-card pb-5'>
                  <img
                    src='assets/images/vschool-pre-school.jpg'
                    alt='Product 1'
                  />
                </div>
              </a>
            </div>
            <div className='card-container'>
              <a
                href='https://www.vschooltrend.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className='product-card pb-5'>
                  <img
                    src='assets/images/vschool-sjkc-syllabus.jpg'
                    alt='Product 2'
                  />
                </div>
              </a>
            </div>
            <div className='card-container'>
              <a
                href='https://www.vschooltrend.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className='product-card pb-5'>
                  <img
                    src='assets/images/vschool-sk-syllabus.jpg'
                    alt='Product 3'
                  />
                </div>
              </a>
            </div>
            <div className='card-container'>
              <a
                href='https://www.vschooltrend.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className='product-card pb-5'>
                  <img
                    src='assets/images/vschool-smk-syllabus.jpg'
                    alt='Product 4'
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
                  <div className='carousel-item active'>
                    <div className='row'>
                      <div className='col-md-5 col-sm-12 pb-2'>
                        <div className='bounceInLeft'>
                          <div className='awards-section-content text-center black'>
                            <div className='py- awards-header'>
                              <h5 className='font-weight-bold'>
                                PREMIUM INTERNATIONAL BUSINESS AWARD 2017
                                <br />
                                (FOR THE OUTSTANDING OF VSCHOOL TREND LEARNING
                                PROGRAM)
                              </h5>
                            </div>

                            <div className='awards-content'>
                              <span>
                                BY TENGKU LAKSAMANA KELANTAN
                                <br />
                                (PATRON HIS HIGHNESS TENGKU ADBUL HALIM IBNI
                                ALMARHUM SULTAN IBRAHIM)
                              </span>
                            </div>
                            <button
                              type='button'
                              className='btn-video green py-3'
                              data-toggle='modal'
                              data-target='.bd-example-modal-lg-01'
                            >
                              View Video <i className='fa fa-play-circle'></i>
                            </button>
                            <div className='awards-img pt-2'>
                              <img
                                src='assets/images/award/reward_p01_award.jpg'
                                alt='Reward_1'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-7 col-sm-12 pb-0'>
                        <div className='bounceInRight'>
                          <img
                            src='assets/images/award/reward_p01.jpg'
                            alt='Reward 01'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='row'>
                      <div className='col-md-5 col-sm-12 pb-2'>
                        <div className='bounceInLeft'>
                          <div className='awards-section-content text-center black'>
                            <h5 className='font-weight-bold py-4'>
                              ASIA TOP BUSINESS AWARD 2018
                            </h5>

                            <div className='awards-img pt-3'>
                              <img
                                src='assets/images/award/reward_p02_award.jpg'
                                alt='Reward_2'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-7 col-sm-12 '>
                        <div className='bounceInRight'>
                          <img
                            src='assets/images/award/reward_p02.jpg'
                            alt='Reward 02'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='row'>
                      <div className='col-md-5 col-sm-12 pb-2'>
                        <div className='bounceInLeft'>
                          <div className='awards-section-content text-center black'>
                            <div className='py-4 awards-header'>
                              <h5 className='font-weight-bold'>
                                ASIA PACIFIC TOP EXCELLENCE BRAND
                                <br />
                                (EMERGING ENTERPRISE 2018/ 2019)
                              </h5>
                            </div>
                            <button
                              type='button'
                              className='btn-video green py-3'
                              data-toggle='modal'
                              data-target='.bd-example-modal-lg-03'
                            >
                              View Video <i className='fa fa-play-circle'></i>
                            </button>
                            <div className='awards-img pt-3'>
                              <img
                                src='assets/images/award/reward_p03_award.jpg'
                                alt='Reward_3'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-7 col-sm-12 '>
                        <div className='bounceInRight'>
                          <img
                            src='assets/images/award/reward_p03.jpg'
                            alt='Reward 03'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='row'>
                      <div className='col-md-5 col-sm-12 pb-2'>
                        <div className='bounceInLeft'>
                          <div className='awards-section-content text-center black'>
                            <div className='py-4 awards-header'>
                              <h5 className='font-weight-bold'>
                                The BrandLaurete SMEs BestBrands Awards
                                2018/2019
                              </h5>
                            </div>
                            <p>
                              Congratulations to VSchool Trend Learning Program
                              for winning The BrandLaurete SMEs BestBrands Award
                              2018/2019, for Bestbrands in Education - Online
                              Learning Platform
                            </p>
                            <button
                              type='button'
                              className='btn-video green py-3'
                              data-toggle='modal'
                              data-target='.bd-example-modal-lg-04'
                            >
                              View Video <i className='fa fa-play-circle'></i>
                            </button>
                            <div className='awards-img pt-3'>
                              <img
                                src='assets/images/award/reward_p04_award.jpg'
                                alt='Reward'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-7 col-sm-12 '>
                        <div className='bounceInRight'>
                          <img
                            src='assets/images/award/reward_p04.jpg'
                            alt='Reward'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='row'>
                      <div className='col-md-5 col-sm-12 pb-2'>
                        <div className='bounceInLeft'>
                          <div className='awards-section-content text-center black'>
                            <div className='py-4 awards-header'>
                              <h5 className='font-weight-bold'>
                                GOLDEN BULL AWARD 2019
                              </h5>
                            </div>
                            <p>
                              Congratulations to VKids Trend Sdn Bhd for Winning
                              The Outstanding SME Golden Bull Award 2019 as one
                              of Malaysia’s Finest Companies
                            </p>
                            <button
                              type='button'
                              className='btn-video green py-3'
                              data-toggle='modal'
                              data-target='.bd-example-modal-lg-05'
                            >
                              View Video <i className='fa fa-play-circle'></i>
                            </button>
                            <div className='awards-img pt-3'>
                              <img
                                src='assets/images/award/reward_p05_award.jpg'
                                alt='Reward'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-7 col-sm-12 '>
                        <div className='bounceInRight'>
                          <img
                            src='assets/images/award/reward_p05.jpg'
                            alt='Reward'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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

      {/* Popup video */}
      <div
        className='modal fade bd-example-modal-lg-01'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <video
              poster='assets/images/video/reward_p01-videothumb.jpg'
              id='player01'
              controls
            >
              <source
                src='assets/images/video/reward_p01-D UBR InternationL Award.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>

      <div
        className='modal fade bd-example-modal-lg-03'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <video
              poster='assets/images/video/reward_p03_videothumb.jpg'
              id='player03'
              playsInline
              controls
            >
              <source
                src='assets/images/video/reward_p03-D Top Asia Pacific Excellence Brand Award.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>

      <div
        className='modal fade bd-example-modal-lg-04'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <video
              poster='assets/images/video/reward_p04_videothumb.jpg'
              id='player04'
              playsInline
              controls
            >
              <source
                src='assets/images/video/reward_p04-D SMEs BestBrands Award.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>

      <div
        className='modal fade bd-example-modal-lg-05'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <video
              poster='assets/images/video/reward_p05_videothumb.jpg'
              id='player05'
              playsInline
              controls
            >
              <source
                src='assets/images/video/reward_p05-D VKids Trend Sdn Bhd Golden Bull Awards 2019 Full HD.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>

      {/* Reward Modal */}
      {introVideos &&
        introVideos.map((item, index) => (
          <div
            className={'modal fade reward-modal-lg-0' + index}
            tabIndex='-1'
            role='dialog'
            aria-labelledby='myLargeModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-lg'>
              <div className='modal-content'>
                <video
                  poster={resourceURL + item.Cover}
                  id='player06'
                  playsInline
                  controls
                >
                  <source src={resourceURL + item.Path} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        ))}

      {/* Hall of fame */}
      <section className='ambassador-section bg-green full-height'>
        <div className='ambassador-container'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 py-5'>
                <div className='ambassador-section-header text-center text-uppercase'>
                  <h1 className='pb-2'>Hall of fame</h1>
                  <div className='hw'></div>
                </div>
              </div>
            </div>

            <div className='slickAmbassador'>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    className='m-auto'
                    src='assets/images/legendary/1-Legendary-Circle-Remy-and-Derlin.jpg'
                    alt='REMY & DERLIN'
                  />
                </div>
                <p className='white'>
                  LEGENDARY CIRCLE
                  <br /> <span>REMY & DERLIN</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto'
                    src='assets/images/legendary/2-Legendary-Circle-Pinky-Yap.jpg'
                  />
                </div>
                <p className='white'>
                  LEGENDARY CIRCLE
                  <br /> <span>PINKY & YAP</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/3-Legendary-Circle-Alan-and-Cindy.jpg'
                  />
                </div>
                <p className='white'>
                  LEGENDARY CIRCLE
                  <br /> <span>ALAN & CINDY</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/4-Legend-Ambassador-Club-Kelly-Ong.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  LEGENDARY Ambassador Club
                  <br /> <span>KELLY ONG</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/5-Royal-Ambassador-Club-David-and-Janice.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Royal Ambassador Club
                  <br /> <span>David & Janicer</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/6-Royal-Ambassador-Club-Krystle-and-Sean.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Royal Ambassador Club
                  <br /> <span>Krystle & Sean</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/7-Royal-Ambassador-Club-Ethan-and-Vikki.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Royal Ambassador Club
                  <br /> <span>Ethan & Vikki</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/8-Royal-Ambassador-Club-Vicky-and-Andy.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Royal Ambassador Club
                  <br /> <span>Vicky & Andy</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/9-Royal-Ambassador-Club-Jes-Tan.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Royal Ambassador Club
                  <br /> <span>Jes Tan</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/10-Star-Ambassador-Club-Teoh-Wey-Yi-.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Star Ambassador Club
                  <br /> <span>Teoh Wey Yi</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/11-Star-Ambassador-Club-Jen-Chun-Kiat.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Star Ambassador Club
                  <br /> <span>Jen Chun Kiat</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/12-Star-Ambassador-Club-Lim-Lea-Shuan.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Star Ambassador Club
                  <br /> <span>Lim Lea Shuan</span>
                </p>
              </div>
              <div className='amd-content text-center'>
                <div className='amd-portrait'>
                  <img
                    alt=''
                    className='m-auto m-auto'
                    src='assets/images/legendary/13-Star-Ambassador-Club-Jane-Ang.jpg'
                  />
                </div>
                <p className='white text-uppercase'>
                  Star Ambassador Club
                  <br /> <span>Jane Ang</span>
                </p>
              </div>
            </div>

            <div className='ribbon-container text-center'>
              <div className='pt-5'>
                <p className='pb-1'>Let’s join VKids Trend big family.</p>
                <br />
                <a className='style-link-btn' href='#contact-us-section'>
                  Join us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='video-award-bg-parallax products-section full-height'>
        <div className='container'>
          <div className='video-award-slider'>
            {introVideos &&
              introVideos.map((item, index) => (
                <div className='card-container'>
                  <a
                    href='https://www.vschooltrend.com/'
                    data-toggle='modal'
                    data-target={'.reward-modal-lg-0' + index}
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
                    <p className='py-2'>
                      Email: customerservice@vkidstrendsb.com
                    </p>
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
