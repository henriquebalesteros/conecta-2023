import React from 'react'
import './style.scss'
import LastEditionElemnt from './mao-smart-segunda-edicao.png'

const LastEdition = () => {
	return (
		<section className='last-edition'>
			<div className='last-edition-wrapper'>
				<figure className='element-last-edition'><img src={LastEditionElemnt} alt='' title=''></img></figure>
				<div className='last-edition-title'>
					<h3><strong>Como foi</strong> a segunda edição?</h3>
				</div>
				<div className='last-edition-video'>
					<iframe width="852" height="451" src="https://www.youtube.com/embed/kvQWKWHemsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
			</div>
		</section>
	);
};

export default LastEdition;