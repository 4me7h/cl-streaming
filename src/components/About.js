import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
// import { FaBed, FaCar, FaRulerCombined, FaDollarSign } from "react-icons/fa";

// import partners01 from '../images/partners-01.png';
// import partners02 from '../images/partners-02.png';
// import partners03 from '../images/partners-03.png';

const imagePaths = [  
  require('../images/img-02.jpg'),
  require('../images/img-01.jpg'),
  require('../images/img-04.jpg'),
  require('../images/img-16.webp'),
  require('../images/img-06.jpg'),
  require('../images/img-17.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-18.jpg'),
  require('../images/img-05.jpg'),
  require('../images/img-13.jpg'),
  require('../images/img-15.jpg'),
  require('../images/img-19.jpg'),
  require('../images/img-07.jpg'),
  require('../images/img-09.jpg'),
  require('../images/img-08.jpg'),
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
                <h2 className="text--subtitle text-center text--white">Todo el contenido de tus plataformas favoritas en una misma</h2>
                <h4 className="text--lead text--quaternary">
                  Descubre un nuevo mundo digital con Kaelus Tv Plus
                </h4>
              </div>
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
              <Fade triggerOne>
                <div className="about__header">
                  <div className="about__header__content">
                    <p className='text--body text-center text-white mb-5'>
                      Kaelus TV es el servicio IPTV más completo y estable del mercado. Con más de 5,000 canales en vivo (incluyendo deportes, películas, series y contenido internacional en HD), tecnología anti-buffering y soporte 24/7, ofrecemos una experiencia de televisión premium por solo <span className="lighted--tertiary"><strong>$250/mes</strong></span>. Compatible con cualquier dispositivo <span className="lighted--quaternary">(Smart TV, Android, iOS, Fire Stick y más)</span>, sin contratos largos y con actualizaciones diarias de contenido. ¡Disfruta de la televisión del futuro hoy mismo!
                    </p>
                    <a className="btn btn--primary" target="__blank" href="https://wa.me/+529991292603?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">Click aquí – Tu TV en HD empieza hoy</a>
                  </div>
                </div>
                {/* <div className='headercontent'>
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
                </div> */}
              </Fade>
          </Col>
        </Row>
      </Container>
      
      {/* <Container>
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
      </Container> */}


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
