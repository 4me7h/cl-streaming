import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';

import imgBackground01 from '../images/img-01.jpg';
import imgBackground02 from '../images/img-19.jpg';
import imgBackground03 from '../images/img-14.jpg';
import imgBackground04 from '../images/img-10.jpg';
import imgBackground05 from '../images/img-18.jpg';
import imgBackground06 from '../images/img-20.jpg';
import imgBackground07 from '../images/img-17.jpg';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const backgrounds = [imgBackground01, imgBackground02, imgBackground03, imgBackground04, imgBackground05, imgBackground06, imgBackground07];
    // Cambia la imagen de fondo cada 5 segundos

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
    , [backgrounds.length]);

    const backgroundImage = `url(${backgrounds[currentSlide]})`;

    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage}}>
            <div className="hero__overlay hero__overlay--black"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Zoom triggerOnce cascade>
                                    <h4 className="text--lead text-white"><span className="lighted--tertiary">Desde <strong>$250 al Mes</strong> </span></h4>
                                    <h1 className="text--title text-white">Disfruta de Kaelus TV al mejor precio
                                    </h1>
                                    <h4 className="text--lead text--quaternary">TV en vivo, películas, series y deportes ¡Sin cortes y en HD!</h4>
                                    <ul className="hero__list">
                                        <li className="hero__list__item">&rarr; +5,000 Canales de TV y Video on Demand siempre actualizado</li>
                                        <li className="hero__list__item">&rarr; Deportes, Series, Películas, Documentales</li>
                                        <li className="hero__list__item">&rarr; Calidad HD estable y sin buffering</li>
                                        <li className="hero__list__item">&rarr; Compatible con la mayoría de los dispositivos actuales</li>
                                        <li className="hero__list__item">&rarr; Todo en Kaelus por menos de <span className="text--tertiary"><strong>$8 diaros</strong></span></li>
                                    </ul>
                                    <a className="btn btn--primary" target="__blank" href="https://wa.me/+529991292603?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">¡Quiero mi prueba gratis!</a>

                                    <div className="slider-controls">
                                    {backgrounds.map((_, index) => (
                                        <button 
                                            key={index}
                                            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                            onClick={() => setCurrentSlide(index)}
                                            aria-label={`Ir a slide ${index + 1}`}
                                        />
                                    ))}
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;