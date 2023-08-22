import React from 'react'
import './style.scss'
import AgendaItem from '../../globals/agenda-item/agenda-item';
import AgendaIco from './agenda-ico.png'
import SubmitButton from '../../globals/submit-button/submit-button';

const EventAgenda = () => {
	return (
		<section className='event-agenda'>
			<p className='lineup-text'>Line Up</p>
			<div className='title-agenda'>
				<div className='wrapper'>
					<h3>confira a <span className='title-agenda-strong'>agenda completa</span>_</h3>
				</div>
				<img src={AgendaIco} alt="conecta elements"></img>
			</div>
			<div class="agenda-list">
				<AgendaItem
				event_time ='08:00 /'
				event_title='Bem-vindo ao Conecta'
				event_speaker='Henrique Balesteros - Dev nstech'/>
				<AgendaItem
				event_time ='08:00 /'
				event_title='Bem-vindo ao Conecta'
				event_speaker='Henrique Balesteros - Dev nstech'/>
				<AgendaItem
				event_time ='08:00 /'
				event_title='Bem-vindo ao Conecta'
				event_speaker='Henrique Balesteros - Dev nstech'/>
				<AgendaItem
				event_time ='08:00 /'
				event_title='Bem-vindo ao Conecta'
				event_speaker='Henrique Balesteros - Dev nstech'/>
				<AgendaItem
				event_time ='08:00 /'
				event_title='Bem-vindo ao Conecta'
				event_speaker='Henrique Balesteros - Dev nstech'/>
			</div>
			<div className='event-submit-button'>
            <SubmitButton/>
            </div>
		</section>
	);
};

export default EventAgenda;