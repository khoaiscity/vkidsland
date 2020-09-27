import React from 'react';

export default function AboutUs() {
  return (
    <>
      <section className='banner-section bg-about-us'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='banner-title text-center text-uppercase'>
                  <h2>The Future Begins Here</h2>
                  <div className='hw'></div>
                  <p className='pt-5'>
                    Maximize the Power of Internet Technology together with
                    Education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about-us-info-section bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 pb-3 p-5'>
              <div className='black pb-2 text-center'>
                <p id='about-us-content' className='line-hg-2 font-1'>
                  An internet based education business company which provides a
                  platform for malaysian students ranging from primary standard
                  1 to secondary form 5, we believe e-Learning is a New Age
                  Learning for all malaysian students today! In correlation with
                  e-Learning platform, we also serve as a training academy that
                  provides various personal development goals or plans and
                  education-related training programs that tailor to the current
                  market. We believe that education is a fundamental need and
                  everyone should have access to a better quality education.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <fieldset className='field-container'>
                <legend style={{ margin: 'auto' }}>
                  <h3 className='abt-section text-uppercase'> Vision </h3>
                </legend>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='abt-content black d-flex justify-content-center text-center'>
                      <p className='font-1'>
                        {' '}
                        “Together We Achieve The EXTRAORDINARY”
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className='col-12 col-md-6'>
              <fieldset className='field-container'>
                <legend style={{ margin: 'auto' }}>
                  <h3 className='abt-section text-uppercase'> Mission </h3>
                </legend>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='abt-content black d-flex justify-content-center text-center'>
                      <div className='text-center'>
                        <p className='font-1'>
                          {' '}
                          “To be one of Malaysia’ top learning e-learning
                          company.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </section>

      <section className='code-value-section bg-grey'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='code-value-header text-center text-uppercase'>
                <h1>Core Values</h1>
                <hr style={{ margin: 'auto' }} />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3 col-6'>
              <div className='code-container-1'>
                <div className='code-content d-flex justify-content-center'>
                  <div className='code-details text-center'>
                    <img src='/assets/icons/code-1.png' alt='Code Value 1' />
                    <p className='black pt-3'>
                      Always Exceed <br />
                      Expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-6'>
              <div className='code-container-2'>
                <div className='code-content d-flex justify-content-center'>
                  <div className='code-details text-center'>
                    <img src='/assets/icons/code-2.png' alt='Code Value 2' />
                    <p className='black pt-3'>
                      Continuous <br />
                      Improvement
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-6'>
              <div className='code-container-3'>
                <div className='code-content d-flex justify-content-center'>
                  <div className='code-details text-center'>
                    <img src='/assets/icons/code-3.png' alt='Code Value 3' />
                    <p className='black pt-3'>
                      We Listen, <br />
                      We Care, <br />
                      We Serve
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-6'>
              <div className='code-container-4'>
                <div className='code-content d-flex justify-content-center'>
                  <div className='code-details text-center'>
                    <img src='/assets/icons/code-4.png' alt='Code Value 4' />
                    <p className='black pt-3'>
                      We Believe in
                      <br />
                      People and
                      <br />
                      Their Dreams
                    </p>
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
