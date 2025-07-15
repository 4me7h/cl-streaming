import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import icon01 from '../images/icon-reseller.png';

const Reseller = () => {
    return (
        <section className="reseller">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="reseller__header">
                            <h2 className="text--subtitle text--white">Conviértete en un Revendedor</h2>
                            <h4 className="text--lead text--quaternary">
                                Únete a nuestro programa de revendedores y comienza a ganar dinero hoy mismo.
                            </h4>
                        </div>
                    </Col>
                    <Col sm={12} lg={5}>
                        <div className="text-center">
                            <img src={icon01} alt="Reseller Program" className="reseller__img img-fluid" />
                        </div>
                    </Col>
                    <Col sm={12} lg={7}>
                        <p className="text--body text-white">
                            Contamos con un sistema fácil de usar para gestionar tus ventas y comisiones. Además, ofrecemos soporte continuo para ayudarte a tener éxito.
                        </p>
                        <p className="text--body text-white">
                            Al convertirte en revendedor, tendrás la oportunidad de ofrecer nuestros servicios a tus clientes, ganar comisiones y disfrutar de beneficios exclusivos.
                        </p>
                        <p className='text--body text-white'>
                            Como revendedor oficial de Kealus TV, tendrás acceso a una plataforma intuitiva para gestionar tus suscripciones y comisiones, además de soporte dedicado para resolver cualquier duda. Podrás ofrecer uno de los servicios de streaming más competitivos del mercado, con contenido exclusivo y alta demanda, generando ingresos recurrentes mientras tus clientes disfrutan de entretenimiento ilimitado.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Reseller;