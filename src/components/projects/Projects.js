import React from 'react';
import './Projects.css';
import Footer from '../footer/Footer';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectFour from './ProjectFour';
import ProjectFive from './ProjectFive';

const Projects = () => {
	return (
		<div>
			<h2 className='projectTabTitle'>Projects</h2>
			<ProjectOne />
			<ProjectTwo />
			<ProjectThree />
			<ProjectFour />
			<ProjectFive />
			<br />
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Projects;
