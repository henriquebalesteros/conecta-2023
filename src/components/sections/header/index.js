import React from 'react'
import './style.scss'
import HeaderImage from './header-image';
import HeaderInfo from './header-info';

const Header = () => {
	return (
		<section className='header'>
			<div className='header-info'>
				<HeaderInfo/>
			</div>
			<div className='header-image'>
				<HeaderImage/>
			</div>
		</section>
	);
};

export default Header;