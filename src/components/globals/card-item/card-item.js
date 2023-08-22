import React from 'react'
import './style.scss'

const CardItem = (props) => {
	return (
		<div className='card-wrapper'>
            <div className='card-item'>
                <div className='card-image'>
                    {props.img_card &&(
                        <img 
                            className='card-image'
                            src={props.img_card}
                            alt={props.title_card.strong_text}
                        />
                    )}
                </div>
                <div className='card-title'>
                    <p>{props.title_card} <span className='strong-text'>{props.strong_text} </span></p>
                </div>
                    
            </div>
        <p className='card-description'> {props.card_description}</p>
        </div>
	);
};

export default CardItem;