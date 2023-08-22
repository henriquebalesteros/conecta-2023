import React from 'react'
import './style.scss'
import HeaderImageWoman from './mulher_tablet.png'
import LogoNstech from './logo-nstech.png'

const HeaderImage = () => {
	return (
		<div className='header-wrapper'>
            <img className='image-header' src={HeaderImageWoman} alt='mulher-tablet' title='Mulher com tablet'></img>
            <div className='nstech-event'>
                <p>um evento</p>
                <img className='logo-nstech' src={LogoNstech} alt='logo-nstech' title='Logo nstech'></img>
            </div>
        </div>
	);
};

export default HeaderImage;