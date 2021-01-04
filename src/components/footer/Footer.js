import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
			<div className='footer'>
				Contact Me: {' '}
				<a
					href='https://www.linkedin.com/in/ashveer-bhayroo/'
					target='_blank'
					rel='noreferrer'>
					LinkedIn{' '}
				</a>
				<a href='https://github.com/AshveerB' target='_blank' rel='noreferrer'>
					GitHub{' '}
				</a>
				<a href='https://codepen.io/ABhayroo' target='_blank' rel='noreferrer'>
					CodePen{' '}
				</a>
                <a href='https://docs.google.com/document/d/1i5VqLNqs5V4GaTSjt2dMuEdepHHzXmBbBoOFJNYRM9o/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
			</div>
		);
};

export default Footer;