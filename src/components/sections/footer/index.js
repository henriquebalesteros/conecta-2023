import React from 'react'
import './style.scss'
import LogoConecta from './logoconecta_01.png'
import LogoNstech from './logo-nstech.png'

const Footer = () => {
	return (
			<section className='footer'>
				<div className='footer-logo-conecta'>
					<img className='footer-logo-conecta' src={LogoConecta} title='' alt=''></img>
				</div>
				<div className='footer-wrapper'>
					<div className='footer-nstech-description'>
						<img src={LogoNstech} title='' alt=''></img>
						<p>A nstech é uma investida da Niche Partners / TARPON e Greenbridge</p>
					</div>
					<p>Av Magalhães de Castro 4800 - Continental Tower - Conjunto 301 - Jardim Panorama - SP</p>
				</div>
			</section>
	);
};

export default Footer;