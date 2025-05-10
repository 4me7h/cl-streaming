import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

// import iconMail from '../images/icon-mail.png';
// import iconWhats from '../images/icon-whats.png';

const Contact = () => {
    return(
        <section className='contact'>
            <Container>
                <Row>
                    <Col>
                        <div className="headercontent__container">
                            <div className="headercontent__header">
                                <Fade cascade triggerOnce direction="up"> 
                                <div className="about__header">
                                    <div className="about__header__content mb-5">
                                        <h2 className="text--subtitle text-center text--white">¿Necesitas ayuda o quieres activar tu servicio?</h2>
                                        <p className='text--body text-center text-white'>
                                        <strong>Horario de atención:</strong> 24/7 (soporte inmediato vía WhatsApp)<br />
                                        <strong>Resuelve tus dudas al instante</strong> – Configuración, pagos o soporte técnico.
                                        </p>
                                    </div>
                                    <a className="btn btn--primary" target="__blank" href="https://wa.me/+529991292603?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">🚀 Activar mi prueba GRATIS</a>
                                </div>
                                {/* <ul className="contact__buttons">
                                    <li className='contact__buttons__item'>
                                        <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Reserva Aquí</a>
                                    </li>
                                    <li className="contact__buttons__item">
                                        <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Reserva Aquí</a>
                                    </li>
                                </ul> */}
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;