import React from 'react'
import './style.scss'
import SubmitButton from '../../globals/submit-button/submit-button';
import LogoNstech from './logo-nstech.png'
import BgInfoNstech from './bg-secao-nstech.png'
import TitleLine from './secao-nstech-line.png'

const NstechInfo = () => {
	return (
		<section className='nstech-info'>
			<figure className='title-element'><img src={TitleLine} alt='' title=''></img></figure>
			<div className='nstech-info-details'>
				<div className='wrapper'>
					<div className='nstech-info-title-wrapper'>
						<p>Sobre a</p>
						<img src={LogoNstech} alt="" title=""></img>
					</div>
					<h3>Somos a mais completa plataforma de tecnologia open logistics do mundo.</h3>
					<p><span className='text-orange'><strong>Somos um ecossistema conectado</strong></span> que está revolucionando o futuro do transporte de cargas e passageiros na América Latina. Oferecemos soluções completas e modulares para que você possa evoluir seus negócios, fazer entregas eficientes e impactar a sociedade ao reduzir a emissão de CO2, acidentes e roubos.</p>
				</div>
				<img src={BgInfoNstech} alt="" title=""></img>
			</div>
			<div className='event-submit-button'>
            <SubmitButton/>
            </div>
		</section>
	);
};

export default NstechInfo;