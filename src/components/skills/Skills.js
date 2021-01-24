import React from 'react';
import Footer from '../footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import './Skills.css';
import Python from '../images/pythonlogo.png'
import Js from '../images/js.jpg'
import HTMLCSS from '../images/html_css.jpg'
import Django from '../images/django.jpg'
import ReactLogo from '../images/logo192.png';
import PostgreSQL from '../images/postgresql.jpg'
import MongoDB from '../images/mongodb.jpeg'
import NodeJS from '../images/nodejs.jpeg'
import Express from '../images/express.jpeg'
import Git from '../images/git.jpeg'
import GitHub from '../images/github.jpeg'
import Mongoose from '../images/mongoose.jpg'
import Postman from '../images/postman.jpg'

const Skills = () => {
	return (
		<div>
			<h2 className='skills'>Skills</h2>
			<br />
			<div className='carouselContainer'>
				<Carousel>
					<Carousel.Item interval={1000}>
						<img className='d-block w-100' src={Python} alt='Python' />
						<br />
						<h3>Python</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={Js} alt='Javascript' />
						<br />
						<h3>Javascript</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={HTMLCSS} alt='HTML/CSS' />
						<br />
						<h3>HTML/CSS</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={Django} alt='Django' />
						<br />
						<h3>Django</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={ReactLogo} alt='React' />
						<br />
						<h3>React</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={PostgreSQL} alt='PostgreSQL' />
						<br />
						<h3>PostgreSQL</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={MongoDB} alt='MongoDB' />
						<br />
						<h3>MongoDB</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={NodeJS} alt='NodeJS' />
						<br />
						<h3>NodeJS</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={Express} alt='Express' />
						<br />
						<h3>Express</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={Git} alt='Git' />
						<br />
						<h3>Git</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={GitHub} alt='GitHub' />
						<br />
						<h3>GitHub</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={Mongoose} alt='Mongoose' />
						<br />
						<h3>Mongoose</h3>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className='d-block w-100' src={Postman} alt='Postman' />
						<br />
						<h3>Postman</h3>
					</Carousel.Item>
				</Carousel>
			</div><br />
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Skills;
