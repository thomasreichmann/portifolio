import { FormattedMessage } from 'react-intl';
import './NavBar.css';
import NavButton from './NavButton';

function NavBar() {
	return (
		<nav className="NavBar">
			<NavButton to="/" root>
				/<FormattedMessage id="NAV_HOME" />/
			</NavButton>
			<NavButton to="/projects">
				/<FormattedMessage id="NAV_PROJECTS" />/
			</NavButton>
		</nav>
	);
}

export default NavBar;
