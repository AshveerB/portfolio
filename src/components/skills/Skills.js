import React from 'react';
import Footer from '../footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import headshot from '../images/headshot.jpg';
import './Skills.css';

const Skills = () => {
	return (
		<div>
			Skills
			<Carousel>
				<Carousel.Item interval={1000}>
					<img className='d-block w-100' src={headshot} alt='Python' />
					<h3>Python</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='Javascript' />
					<h3>Javascript</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='HTML/CSS' />
					<h3>HTML/CSS</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='Django' />
					<h3>Django</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='React' />
					<h3>React</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='PostgreSQL' />
					<h3>PostgreSQL</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='MongoDB' />
					<h3>MongoDB</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='NodeJS' />
					<h3>NodeJS</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='Express' />
					<h3>Express</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='Git' />
					<h3>Git</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='GitHub' />
					<h3>GitHub</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='Mongoose' />
					<h3>Mongoose</h3>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={headshot} alt='Postman' />
					<h3>Postman</h3>
				</Carousel.Item>
			</Carousel>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Skills;
