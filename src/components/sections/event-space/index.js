import React from 'react'
import SubmitButton from '../../globals/submit-button/submit-button';
import './style.scss'
import SalaoEspacoBosque from './espaco-bosque-imagem.png';
import SalaoEspacoBosque2 from './espaco-bosque-salao.png';
import SalaoEspacoBosque3 from './espaco-bosque-salao2.png';

const EventSpace = () => {
	return (
		<section className='event-space'>
			<div className='event-space-title'>
				<h3>Conheça o Espaço do Bosque</h3>
				<p>Evento Presencial</p>
			</div>
			<div className='event-space-details'>
				<div className='event-space-wrapper'>
					<div className='event-space-text'>
						<p>Com um conceito inovador e diferenciado,o espaço proporciona experiências
							marcantes e memoráveis na realização de eventos sociais e corporativos.
							Com um salão amplo, modular e paredes de vidro, permite a criação dos
							mais diversos ambientes e experiências únicas.</p>
						<img src={SalaoEspacoBosque2} alt="" title=""></img>
						<img src={SalaoEspacoBosque3} alt="" title=""></img>
					</div>
					<img src={SalaoEspacoBosque} alt="" title=""></img>
				</div>
			</div>
			<div className='event-space-location'>
				<div className='location-title'>
					<p>Como chegar?</p>
				</div>
				<div className='event-space-maps'>
				<iframe alt="Espaço do Bosque" title="Espaço do Bosque"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117014.59556951933!2d-46.78170748703131!3d-23.57899632649194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8f58b6bece9%3A0x1ee48aec3193d8c2!2sEspa%C3%A7o%20do%20Bosque!5e0!3m2!1sen!2sbr!4v1692623114497!5m2!1sen!2sbr" width="892" height="325" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
			<div className='event-submit-button'>
            <SubmitButton/>
            </div>
		</section>
	);
};

export default EventSpace;