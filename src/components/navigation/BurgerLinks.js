import React from 'react';
import { Link } from 'react-router-dom';

const BurgerLinks = () => {
	return (
		<div>
			<div className='burgerLinks'>
				<Link to='/home' className='hvr-grow white'>
					Home
				</Link>
				<Link to='/about' className='hvr-grow white'>
					About
				</Link>
				<Link to='/projects' className='hvr-grow white'>
					Projects
				</Link>
			</div>
		</div>
	);
};

export default BurgerLinks;
