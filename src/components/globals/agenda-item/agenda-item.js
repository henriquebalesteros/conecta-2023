import React from 'react';
import './style.scss';

const AgendaItem = (props) => {
	return (
		<div className='agenda-item'>
			<div className='event-time'>
				<p>{props.event_time}</p>
			</div>
			<div className='event-title'>
				<h4>{props.event_title}</h4>
			</div>
			<div className='event-speaker'>
				<p>{props.event_speaker}</p>
			</div>
		</div>
	);
};

export default AgendaItem;
