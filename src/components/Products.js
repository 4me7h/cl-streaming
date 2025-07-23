import React from 'react';
// import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Slide, Zoom } from 'react-awesome-reveal';

import CardPack from './CardPack';

export default function Products() {
  // const [visibleDiv, setVisibleDiv] = useState('doblepack');

  return (
    <div className="products">
      <div className="products__header">
        <Container>
          <Row>
            <Col>
              <Slide triggerOnce cascade>
              <div className="about__header__content">
                <h2 className="text--subtitle text-center text--white">Ofrecemos la misma excelencia en cada uno de <span className="text-uppercase text--tertiary">nuestros planes</span></h2>
              </div>
              <div className="about__header__content">
                <p className='text--body text-center text--white'>
                  <span className="text--quaternary">Sin importar cuál elijas, disfrutarás de contenido completo y calidad premium en todo momento.</span> Diseñados para adaptarse a tus necesidades, todos incluyen acceso integral a nuestros servicios, garantizando una experiencia sin límites ni restricciones.
                </p>
              </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className='polygon'>
        <div className='polygon__bottom--right'></div>
      </div> */}
      <Container>
        <Row>
          <Col>
            <div className="products__container">
              <div className="products__content">
                <Slide triggerOnce cascade>
                {/* <div className='products__buttons'>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('basicpack')}>Basic Pack</button>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('doblepack')}>Doble Pack</button>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('triplepack')}>Triple Pack</button>
                </div> */}
                </Slide>
                {/* {visibleDiv === 'basicpack' && (
                  <Zoom triggerOnce cascade>
                  <ul className="products__list basicpack">
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 60 Megas"}
                        megas={"120 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$300"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 100 Megas"}
                        megas={"200 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$400"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 250 Megas"}
                        megas={"500 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$500"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 500 Megas"}
                        megas={"1000 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$600"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                  </ul>
                  </Zoom>
                )} */}
                {/* {visibleDiv === 'doblepack' && ( */}
                  <Zoom triggerOnce cascade>
                  <ul className="products__list doblepack">
                    <li className="products__item">
                      <CardPack 
                        description={"Plan"}
                        megas={"Mensual"}
                        mesesmegas={"Ahorro óptimo"}
                        telfija={"Hasta 3 dispositivos por cuenta"}
                        textapptv={["Con nuestros planes podrás disfrutar del contenido de tus plataformas favoritas en una misma al mejor precio." ]}
                        precio={"$250"}
                        mesesprecio={"mensual"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Plan"}
                        megas={"Trimestral"}
                        mesesmegas={"Ahorro óptimo"}
                        telfija={"Hasta 3 dispositivos por cuenta"}
                        textapptv={["Con nuestros planes podrás disfrutar del contenido de tus plataformas favoritas en una misma al mejor precio." ]}
                        precio={"$675"}
                        mesesprecio={"trimestral"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Plan"}
                        megas={"Semestral"}
                        mesesmegas={"Ahorro óptimo"}
                        telfija={"Hasta 3 dispositivos por cuenta"}
                        textapptv={["Con nuestros planes podrás disfrutar del contenido de tus plataformas favoritas en una misma al mejor precio." ]}
                        precio={"$1,200"}
                        mesesprecio={"semestral"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Plan"}
                        megas={"Anual"}
                        mesesmegas={"Ahorro óptimo"}
                        telfija={"Hasta 3 dispositivos por cuenta"}
                        textapptv={["Con nuestros planes podrás disfrutar del contenido de tus plataformas favoritas en una misma al mejor precio." ]}
                        precio={"$2,160"}
                        mesesprecio={"anual"}
                      />
                    </li>
                  </ul>
                  </Zoom>
                {/* )} */}
                {/* {visibleDiv === 'triplepack' && (
                  <Zoom triggerOnce cascade>
                  <ul className="products__list triplepack">
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 60 Megas"}
                        megas={"120 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$510"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 100 Megas"}
                        megas={"200 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$610"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 250 Megas"}
                        megas={"500 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$710"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 500 Megas"}
                        megas={"1000 Megas"}
                        mesesmegas={"x 6 meses* Simétrico"}
                        telfija={"+ Telefonía Fija"}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        textapptv={["Estándar con anuncios", <br />, "2 dispositivos Full HD"]}
                        precio={"$810"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                  </ul>
                  </Zoom>
                )} */}
                <Zoom triggerOnce cascade>
               
                <p className='text--body text-center text--quaternary'>
                  La diferencia está en la duración y el ahorro: elige el que mejor se ajuste a ti y disfruta de lo mejor, siempre.
                </p>
                </Zoom>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        
  )
}
