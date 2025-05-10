import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
import { FaMobileAlt, FaTv, FaHeadset, FaServer  } from "react-icons/fa";

import partners01 from '../images/logo-roku.png';
import partners02 from '../images/logo-apple.webp';
import partners03 from '../images/logo-android.png';
import partners04 from '../images/logo-firetv.png';
import partners05 from '../images/logo-chrome.png';


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
                      Kaelus TV es el servicio IPTV más completo y estable del mercado. Con más de 5,000 canales en vivo (incluyendo deportes, películas, series y contenido internacional en HD), tecnología anti-buffering y soporte 24/7, ofrecemos una experiencia de televisión premium por solo <span className="text--tertiary"><strong>$250/mes</strong></span>. Compatible con cualquier dispositivo <span className="lighted--quaternary">(Smart TV, Android, iOS, Fire Stick, Roku, los principales navegadores: Chrome, Firefox, Edge y más)</span>, sin contratos largos y con actualizaciones diarias de contenido. ¡Disfruta de la televisión del futuro hoy mismo!
                    </p>
                    <a className="btn btn--primary" target="__blank" href="https://wa.me/+529991292603?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">Click aquí – Tu TV en HD empieza hoy</a>
                  </div>
                </div>
                <div className='headercontent'>
                  <div className="headercontent__content">
                    <h4 className="text--lead text-center text--quaternary">Kaelus TV lleva entretenimiento para todos a tu hogar: desde canales infantiles y películas familiares hasta deportes y noticias globales.</h4>
                    <h4 className="text--lead text-center"><span className="text--tertiary">Por tan sólo $250/Mes</span></h4>
                  </div>
                </div>
                <div className="about__content">
                  <ul className="boxes">
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaMobileAlt size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Hasta 3 dispositivos</h4>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaTv size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Más de 5,000 canales</h4>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaHeadset size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Cuenta con soporte 24/7</h4>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaServer size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Garantizado 99.9% de uptime</h4>
                    </li>
                  </ul>
                </div>
              </Fade>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="right">
              <div className="about__content">
                <div className="about__header">
                  <div className="about__header__content">
                    <h2 className="text--subtitle text--white">La mejor compatibilidad con tus dispositivos, hasta 3 al mismo tiempo</h2>
                    <h4 className="text--lead text--quaternary">
                      Smart TV, Android, iOS, Fire Stick, Roku, Google Chrome
                    </h4>
                  </div>
                </div>
                <ul className='about__partners'>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--roku" src={partners01} alt="roku"/>
                  </li>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--apple" src={partners02} alt="apple"/>
                  </li>
                  <li className='about__partners__item about__partners__item--android'>
                    <img className="about__partners__item__img about__partners__item__img--android" src={partners03} alt="android"/>
                  </li>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--fire" src={partners04} alt="fire-tv"/>
                  </li>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--chrome" src={partners05} alt="google-chrome"/>
                  </li>
                </ul>
                <div className='text-center'>
                  <a className="btn btn--primary" target="__blank" href="https://wa.me/+529991292603?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">WhatsApp Directo – Resuelve tus dudas en 1 minuto</a>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
