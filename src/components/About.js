import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
import { FaBed, FaCar, FaRulerCombined, FaDollarSign } from "react-icons/fa";

// import partners01 from '../images/partners-01.png';
// import partners02 from '../images/partners-02.png';
// import partners03 from '../images/partners-03.png';

const imagePaths = [  
  require('../images/img-08.jpg'),
  require('../images/img-09.jpg'),
  require('../images/img-10.jpg'),
  require('../images/img-11.jpg'),
  require('../images/img-12.jpg'),
  require('../images/img-13.jpg'),
];

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="left">
            <div className="about__header">
              <div className="about__header__content">
                <h2 className="text--subtitle text-center text-uppercase text--white">5204 Bedford Ave</h2>
                <h4 className="text--lead text-white">
                  W Slauson Avenue - S Sherbourne Drive - W 57th Street to Bedford Ave
                </h4>
                <p className='text--body text-center text-white mb-5'>
                  Exclusive Upper Ladera Heights Neighborhood! First time on the market in 20 years! Welcome to 5204 Bedford Ave, a luxurious single-family residence in Los Angeles, CA, spanning an expansive 4,300 square feet of living space.
                </p>
                <a className="btn btn--secondary" target="__blank" href="https://wa.me/+13106334350?text=Hi,%20I'm%20interested%20in%20the%20property%20at%205207%20Sale%20Ave,%20Woodland%20Hills.%20Can%20you%20share%20more%20details%20or%20schedule%20a%20viewing?">CLICK HERE TO CONTACT</a>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
              <Fade triggerOnce>
                <div className='headercontent'>
                  <div className="headercontent__content">
                    <h2 className="text--subtitle text-center text--white">Listing Details</h2>
                  </div>
                </div>
                <div className="about__content">
                  <ul className="boxes">
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaBed size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Beds: 6</h4>
                      <p className='text--body boxes__content'>Baths: 4</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaRulerCombined size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">SqFt: 4,300</h4>
                      <p className='text--body boxes__content'>MLS#: 24-454149</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaCar size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Parking Spaces: 4</h4>
                      <p className='text--body boxes__content'>Attached, Garage - Parking for Guests</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaDollarSign size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Price: $2,125,000</h4>
                      <p className='text--body boxes__content'>Price/SqFt: $494.19</p>
                    </li>
                  </ul>
                </div>
              </Fade>
          </Col>
        </Row>
      </Container>
      <Gridimg 
          imagePaths = {imagePaths}
      />
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="left">
            <div className="about__header">
              <div className="about__header__content">
                <h2 className="text--subtitle text-center text-uppercase text--white">Los Angeles CA 90056</h2>
                <h4 className="text--lead text-white">MLS# 24-454149</h4>
                <p className='text--body text-center text-white mb-5'>
                  This stunning detached house boasts 6 spacious bedrooms and 4 meticulously renovated bathrooms, offering a harmonious blend of elegance and modern convenience. Step inside to find architectural elements that include built-ins, offering 2 fireplaces one is a breathtaking double sided fireplace, and exposed brick walls that add character to the soaring high-ceilings.
                </p>
              </div>
              <div className="about__content text-center">
                <a className="btn btn--secondary" target="__blank" href="https://wa.me/+13106334350?text=Hi,%20I'm%20interested%20in%20the%20property%20at%205207%20Sale%20Ave,%20Woodland%20Hills.%20Can%20you%20share%20more%20details%20or%20schedule%20a%20viewing?">PRIVATE SHOWING</a>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>


      {/* <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="right">
              <div className="about__content">
                <ul className='about__partners'>
                  <li className='about__partners__item'>
                    <h4 className="text--subtitle text-center text-uppercase text--dark-secondary"><em>Nuestras<br />Marcas</em></h4>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners01} alt="MetaAds"/>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners02} alt="GoHighLevel"/>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners03} alt="Appointwise"/>
                  </li>
                </ul>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container> */}
      
    </section>
  )
}
