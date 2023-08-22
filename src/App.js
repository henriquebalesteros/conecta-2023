import React from 'react';
import './App.scss';
import Header from './components/sections/header';
import EventAgenda from './components/sections/event-agenda';
import LastEdition from './components/sections/last-edition';
import EventSpace from './components/sections/event-space';
import NstechInfo from './components/sections/nstech-info';
import Footer from './components/sections/footer';
import EventInfo from './components/sections/event-info';

function App() {
	return (
		<main>
			<Header/>
			<EventInfo/>
			<EventAgenda/>
			<LastEdition/>
			<EventSpace/>
			<NstechInfo/>
			<Footer/>
		</main>
	);
}

export default App;
