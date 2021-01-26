import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'

function App() {
  return (
		<div className='App'>
			<Navigation />
			<main>
				<Route path='/home' component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
			</main>
		</div>
	);
}

export default App;
