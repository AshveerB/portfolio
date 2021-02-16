import React from 'react';
import './Projects.css';
import Footer from '../footer/Footer';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectFour from './ProjectFour';
import ProjectFive from './ProjectFive';
import ProjectSix from './ProjectSix';

const Projects = () => {
	return (
		<div>
			<h2 className='projectTabTitle'>Projects</h2>
			<div className='projectsContainer'>
				<ProjectOne />
				<ProjectTwo />
				<ProjectThree />
				<ProjectFour />
				<ProjectSix />
				<ProjectFive />
			</div>
			<br />
			<br />
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Projects;
