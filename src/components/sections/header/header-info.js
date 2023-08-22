import React from 'react'
import './style.scss'
import SubmitButton from '../../globals/submit-button/submit-button';
import LogoConecta from './logoconecta_01.png'

const HeaderInfo = () => {
	return (
		<div className='header-wrapper'>
            <div className='header-section1'>
				<h3 className='header-text-top'>
					Conexoes impactantes entre<span className='text-orange'> - </span>pessoas, propósitos e tecnologia.
				</h3>
				<img className='logo-conecta' src={LogoConecta} alt='logo-conecta' title='Logo Conecta 2023'></img>
				<div className='header-submit-button'>
					<SubmitButton/>
					<p>para participação online</p>
				</div>
			</div>
			<div className='header-event-info'>
				<div className='event-date'>
					<div className='title-event-date'>
						<p>13</p>
					</div>
					<div>
						<p className='text-header-event'><span className='text-orange'>/</span>09</p>
						<p className='description-header-event text-orange'>Quarta feira</p>
					</div>
				</div>
				<div className='event-location'>
					<p className='title-event-location'>Espaço do bosque</p>
					<p className='city-event-location'>_São Paulo / SP</p>
					<p className='hour-event-location'>das 08:00 às 18:00</p>
				</div>
			</div>
        </div>
	);
};

export default HeaderInfo;