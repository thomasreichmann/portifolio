import './NavBar.css';
import NavButton from './NavButton';

function NavBar() {
	return (
		<nav className="NavBar">
			<NavButton to="/" root>
				/home/
			</NavButton>
			<NavButton to="/projects">/projects/</NavButton>
		</nav>
	);
}

export default NavBar;
