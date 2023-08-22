import React from 'react'
import './style.scss'
import SubmitButton from '../../globals/submit-button/submit-button';
import CardItem from '../../globals/card-item/card-item';
import FirstIco from './aberto-ao-publico-ico.png'
import SecondIco from './evento-online-ico.png'
import ThirdIco from './100-gratuito-ico.png'
import OndaLinha from './onda_linha.png'
import GifOndas from './efeito-ondas.gif'
import LineElement from './line-section-2.png'

const EventInfo = () => {
	return (
		<section className='event-info'>
			<div className='event-details-01'>
                <div className='section-1'>
                    <h1>Think Big_ Start Small_ Learn Fast<span className='text-orange'>.</span></h1>
                </div>
                <div className='event-plus'>
                    <figure className='element-line-plus'><img src={LineElement} alt='' title=''></img></figure>
                    <div className='div1'><h4>10 horas de conteúdo rico.</h4></div>
                    <div className='div2'><h4>Palestras com especialistas do mercado.</h4></div>
                    <div className='div5'><h4>Networking com a comunidade tech.</h4></div>
                    <div className='div4'><h4>Centenas de partcipantes.</h4></div>
                </div>
            </div>
            <div className='event-submit-button'>
            <SubmitButton/>
            </div>
            <div className='event-details-2'>
                    <CardItem
                        title_card='Aberto ao'
                        strong_text='Público'
                        img_card={FirstIco}
                    />
                    <CardItem
                        title_card='Evento'
                        strong_text='online'
                        img_card={SecondIco}
                        card_description='Presencial, exclusivo para nstechers'
                    />
                    <CardItem
                        title_card='100%'
                        strong_text='gratuito'
                        img_card={ThirdIco}
                    />
                <img className='element-line' src={OndaLinha} title='' alt=''></img>
                <figure className='gif-ondas'>
                    <img src={GifOndas} alt='' title=''></img>
                </figure>
            </div>
		</section>
	);
};

export default EventInfo;