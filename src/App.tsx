import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Projects from './projects/Projects';
import { IntlProvider } from 'react-intl';

import en from './translation/en.json';
import pt from './translation/pt.json';

import Header from './generics/header/Header';

export const LOCALE_LIST = ['en', 'pt'] as const;
export type Locale = typeof LOCALE_LIST[number];

function App() {
	const [locale, setLocale] = React.useState<Locale>('en');

	const messages = { en, pt };

	const handleLocaleChange = (newLocale: Locale) => {
		setLocale(newLocale);
	};

	return (
		<IntlProvider locale={locale} messages={messages[locale]}>
			<Router>
				<div className="App">
					<Header onLocaleChanged={handleLocaleChange} />
					<Routes>
						<Route path="/projects" element={<Projects />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
		</IntlProvider>
	);
}

export default App;
