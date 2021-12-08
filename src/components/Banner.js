import React from 'react';
import { Btn } from './Btn';
//Images:
import MainLogo from '../Img/Banner-Bootcamp-Logo.svg';
import Arrow from '../Img/Arrow.svg';
import Cloud1 from '../Img/Cloud1.svg';
import Cloud2 from '../Img/Cloud2.svg';
import Cloud3 from '../Img/Cloud3.svg';

export const Banner = () => {
    return (
        // Banner Box Container
        <div className='banner_box'>

            <img
                className='banner_logo'
                src={MainLogo}
                alt='Main Logo'
            />

            <div className='banner_info_box'>
                <h1>AWS Re/Start</h1>
                <hr />

                <h3>Ayudando a personas a desarrollar
                    carreras profesionales en la nube
                </h3>

                <p>Formación presencial de personas desempleadas o
                    subempleadas para desarrollar carreras profesionales
                    basadas en la nube
                </p>


                <div className='btn_box'>
                    <Btn />

                    <div>
                        <img
                            className='arrow'
                            src={Arrow}
                            alt='Arrow'
                        />
                    </div>

                </div>

            </div>

            <div className='clouds'>
                <img
                    className='cloud1'
                    src={Cloud1}
                    alt='Cloud1'
                />

                <img
                    className='cloud2'
                    src={Cloud2}
                    alt='Cloud2'
                />

                <img
                    className='cloud3'
                    src={Cloud3}
                    alt='Cloud3'
                />
            </div>

        </div>
    )
}
