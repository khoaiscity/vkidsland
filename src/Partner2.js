import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

function Partner2() {
  const resourceURL = process.env.REACT_APP_RESOURCE_URL;
  const [member1, setTeamMember1] = useState(null);
  const [member2, setTeamMember2] = useState(null);
  const [member3, setTeamMember3] = useState(null);

  useEffect(() => {
    if (member1 === null) {
      fetch('/api/team-manager/1')
          .then((response) => response.json())
          .then((response) => setTeamMember1(response.data));
    }
  }, [member1]);

  useEffect(() => {
    if (member2 === null) {
      fetch('/api/team-manager/2')
          .then((response) => response.json())
          .then((response) => setTeamMember2(response.data));
    }
  }, [member2]);

  useEffect(() => {
    if (member3 === null) {
      fetch('/api/team-manager/3')
          .then((response) => response.json())
          .then((response) => setTeamMember3(response.data));
    }
  }, [member3]);

  return (
    <>
      <section className='banner-section bg-partner2'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4'></div>
              <div className='col-12 col-md-8'>
                <div className='banner-title text-center text-uppercase'>
                  <h2>{member2 && (member2.Name)}</h2>
                  <div className='hw'></div>
                  <p className='pt-5'>{member2 && (member2.Position)}</p>
                  <p style={{'font-weight':'500','font-size':'1.4rem','text-transform':'capitalize'}}>{member2 && (member2.Achievement)}</p>
                </div>
              </div>
              <div className='col-12 col-md-1'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='partner-details-section bg-white p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-4 pt-3'>
              <div className='partner-details text-uppercase text-left black'>
                <h2 className='text-title partner-name font-weight-900'>{member2 && (member2.Name)}</h2>
                <hr />
                <p className='pt-4' style={{'font-size':'1.1rem','font-weight':'600'}}>{member2 && (member2.Intro)}</p>
                <p style={{'font-size':'1.1rem','font-weight':'500'}}>{member2 && (member2.Intro2)}</p>
              </div>
            </div>
            <div className='col-12 col-lg-8 pt-2'>
              <div className='text-uppercase black'>
                <p className='font-1' style={{'text-align':'justify','white-space':'break-spaces'}}>{member2 && (member2.LongDescription)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='partner-img-slider'>
          {member2 && member2.sliderPhoto.length > 0 && (
            member2.sliderPhoto.map((item, index) => (
              <img
                src={resourceURL + item}
                alt={member2 && (member2.Name)}
              />
            ))
          )}
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
                  {member1 && (<img
                      src={resourceURL + member1.HalfBodyPhoto}
                      alt={member1.Name}
                  />)}
                  {/*<img src='assets/images/member1-vivian.jpg' alt='DR. VIVIAN KER'/>*/}
                </div>
                <div className='col-6'>
                  <div className='partner-info black'>
                    <h3 className='font-weight-800'>{member1 && (member1.Name)}</h3>
                    <p>{member1 && (member1.Position)}</p>
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
                  {member3 && (<img
                      src={resourceURL + member3.HalfBodyPhoto}
                      alt={member3.Name}
                  />)}
                  {/*<img src='assets/images/member3-eric.jpg' alt='Eric' />*/}
                </div>
                <div className='col-6'>
                  <div className='partner-info black'>
                    <h3 className='font-weight-800'>{member3 && (member3.Name)}</h3>
                    <p>{member3 && (member3.Position)}</p>
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

export default Partner2;