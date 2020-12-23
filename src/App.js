import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'

function App() {
  return (
		<div className='App'>
			<Header />
			<Navigation />
			<main>
				<Route path='/home' component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/about' component={About} />
				<Route path='/skills' component={Skills} />
				<Route path='/projects' component={Projects} />
				<Route path='/resume' component={Resume} />
			</main>
		</div>
	);
}

export default App;
