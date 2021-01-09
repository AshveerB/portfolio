import React from 'react';
import Footer from '../footer/Footer'
import './Home.css'
import headshot from '../images/headshot.jpg'

const Home = () => {
    return (
			<div>
				<div className='intro'>Hello! I'm Ash and I am a Fullstack Software Engineer</div>
				<img
					src={headshot}
					alt='headshot'
					className='headshot'
				/><br />
				<div>
					<Footer />
				</div>
			</div>
		);
};

export default Home;