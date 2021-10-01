import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './home/Home';
import Projects from './projects/Projects';

function App() {
	return (
		<Router>
			<div className="App">
				{/* Header with title and nav buttons */}
				<header className="App-header">
					<h2>
						<Link to="/">thomas reichmann</Link>
					</h2>
					<nav>
						<NavLink
							to="/"
							activeClassName="App-nav-active"
							isActive={(match, location) => {
								if (!match) return false;
								if (location.pathname === '/') return true;

								return false;
							}}
						>
							/home/
						</NavLink>
						<NavLink to="/projects" activeClassName="App-nav-active">
							projects
						</NavLink>
					</nav>
				</header>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
