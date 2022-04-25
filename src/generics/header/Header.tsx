import React from 'react';
import { Link } from 'react-router-dom';
import { Locale, LOCALE_LIST } from '../../App';
import MultiSelectButton from '../multiSelectButton/MultiSelectButton';
import NavBar from '../navBar/NavBar';
import './Header.scss';

interface HeaderProps {
	onLocaleChanged: (locale: Locale) => void;
}

export default function Header(props: HeaderProps) {
	return (
		<header className="Header App-header">
			<div className="top-header">
				<h2>
					<Link to="/">thomas reichmann</Link>
				</h2>
				<div className="language-select">
					<MultiSelectButton
						values={LOCALE_LIST as unknown as string[]}
						onValueChanged={value => props.onLocaleChanged(value as Locale)}
					/>
				</div>
			</div>
			<NavBar />
		</header>
	);
}
