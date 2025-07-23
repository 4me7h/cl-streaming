import React from 'react';

const CardPack = ({description, megas, mesesmegas, telfija, precio, mesesprecio, preciomes, imgview, textview, imgapptv, textapptv,}) => {
    return(
        <div className="cardpack">
            <div className="cardpack__content">
                <span className="cardpack__text cardpack__text--description">
                    {description}
                </span>
                <span class="cardpack__text cardpack__text--megas">
                    {megas}
                </span>
                <span class="cardpack__text cardpack__text--mesesmegas">
                    {mesesmegas}
                </span>
                {imgview && (
                    <img src={imgview} alt="imgview" className='cardpack__img--view'/>
                )}
                {textview && (
                    <span class="cardpack__text cardpack__text--view">
                        {textview}
                    </span>
                )}
                <span class="cardpack__text cardpack__text--telfija">
                    {telfija}
                </span>
                {imgapptv && (
                    <img src={imgapptv} alt="netflix-app" className='cardpack__img--app' />
                )}
                {textapptv && (
                    <span class="cardpack__text cardpack__text--apptv">
                        {textapptv}
                    </span>
                )}
                <span class="cardpack__text cardpack__text--precio">
                    {precio} <span class="cardpack__text cardpack__text--preciomes">{preciomes}</span>
                </span>
                
                <span class="cardpack__text cardpack__text--mesesprecio">
                    {mesesprecio} 
                </span>
                <span class="cardpack__text cardpack__text--button">
                    <a className="btn btn--primary" target="__blank" href="https://wa.me/+529991292603?text=Hola,%20estoy%20interesado%20en%20un%20plan%20de%20Kaelus">Contrata Ahora</a>
                </span>
            </div>
        </div>       
    )
}

export default CardPack;