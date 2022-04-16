import React from 'react';
import { Link } from 'react-router-dom';
import MultiSelectButton from '../multiSelectButton/MultiSelectButton';
import NavBar from '../navBar/NavBar';
import './Header.scss';

export default function Header() {
	return (
		<header className="Header App-header">
			<div className="top-header">
				<h2>
					<Link to="/">thomas reichmann</Link>
				</h2>
				<MultiSelectButton />
			</div>
			<NavBar />
		</header>
	);
}
