import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Projects from './projects/Projects';
import NavBar from './navBar/NavBar';
import { IntlProvider } from 'react-intl';

import en from './translation/en.json';
import pt from './translation/pt.json';

type Locale = 'pt' | 'en';

function App() {
	const [locale, setLocale] = React.useState<Locale>('en');

	const messages = { en, pt };

	return (
		<IntlProvider locale={locale} messages={messages[locale]}>
			<Router>
				<div className="App">
					{/* Header with title and nav buttons */}
					<header className="App-header">
						<h2>
							<Link to="/">thomas reichmann</Link>
						</h2>
						<NavBar />
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
		</IntlProvider>
	);
}

export default App;
