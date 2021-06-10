import React, {useEffect, useState} from 'react';

export default function Products() {
  const resourceURL = process.env.REACT_APP_RESOURCE_URL;
  const [mainVideo, setMainVideo] = useState(null);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    if (mainVideo === null) {
      fetch('/api/slider?page=product&key=intro-video')
        .then((response) => response.json())
        .then((response) => setMainVideo(response.data[0]));
    }
  }, [mainVideo]);

  useEffect(() => {
    if (slider === null) {
      fetch('/api/slider?page=product&key=image-slider')
        .then((response) => response.json())
        .then((response) => setSlider(response.data));
    }
  }, [slider]);

  return (
    <>
      {mainVideo && (
        <section className='video-banner-section'>
          <div className='video-wrap'>
            <div className='embed-responsive embed-responsive-16by9 js-videoWrapper'>
              <iframe
                title='video'
                id='vschool-video'
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

      <section className='banner-section bg-product-banner'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='banner-title text-center text-uppercase'>
                  <img src='assets/icons/vschool.png' alt='VSCHOOL TREND'/>
                  <div className='hw pb-5'></div>
                  <h3>STUDY ANYTIME. ANYWHERE</h3>
                  <p className='banner-caption1 pt-2'>
                    With VSchool Trend Learning Program, education no longer
                    needs to be restricted by location and time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {slider && slider.length && (
        <section className='main-landing-section'>
          <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-ride='carousel'
          >
            <ol className='carousel-indicators'>
              {slider.map((item, index) => (
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to={index}
                  className={!index ? 'active' : ''}
                ></li>
              ))}
            </ol>
            <div className='carousel-inner'>
              {slider.map((item, index) => (
                <div className={'carousel-item ' + (!index ? 'active' : '')}>
                  <div
                    className='carousel-image'
                    style={{
                      background: `url(${
                        resourceURL + item.Path
                      }) no-repeat center center fixed`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className='carousel-caption'>
              <a
                className='text-uppercase white style2-btn'
                href='https://www.facebook.com/vschooltrend'
                rel='noopener noreferrer'
                target='_blank'
              >Find out more</a>
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
              href='#carouselExampleIndicators'
              className='banner-next carousel-control-next'
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

      <section className='explore-section bg-explore'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='explore-header text-center'>
                <h1 className='text-uppercase'>VSchool Trend Learning Program</h1>
                <p className='pt-3 pb-5 text-uppercase'>A Brand New and Most Comprehensive Online Learning Programme</p>
                <p className='pt-3 pb-1' style={{'text-align': 'justify'}}>VKids Trend Sdn. Bhd. does not condone and recognise the legitimacy of any sale of VKids Trend Sdn. Bhd.’s products through e-commerce platforms wherein such platforms are not limited to Shopee, Lazada and etcetera. Pursuant to Section 19A of the Direct Sales and Anti-Pyramid Scheme Act 1993 (“Act”), no person shall supply by sale, or advertise for the supply of, through electronic transaction, any goods or services except in accordance with this Act or the regulation. VKids Trend Sdn. Bhd. does not condone any actions contravening the Act and will not be responsible for any liabilities associated with sales through electronic transactions.</p>
                <p className='pt-1 pb-5'>Please contact one of our VKids Trend distributors in order to purchase a valid VSchool Trend portal or if you require any further assistance.</p>
                <a
                  href='https://www.vschooltrend.com'
                  className='style1-btn px-5 py-3 text-uppercase'
                  rel='noopener noreferrer'
                  target='_blank'
                >Find Out More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
