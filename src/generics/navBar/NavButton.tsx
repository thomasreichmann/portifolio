import { NavLink } from 'react-router-dom';

interface NavButtonProps {
	children: any;
	to: string;
	root?: boolean;
}

function NavButton(props: NavButtonProps) {
	return (
		<>
			{/* If we have the root navLink we add the isActive test to it */}
			{props.root ? (
				<NavLink
					to={props.to}
					activeClassName="App-nav-active"
					isActive={(match, location) => {
						if (!match) return false;
						if (location.pathname === '/') return true;

						return false;
					}}
				>
					{props.children}
				</NavLink>
			) : (
				<NavLink to={props.to} activeClassName="App-nav-active">
					{props.children}
				</NavLink>
			)}
		</>
	);
}

export default NavButton;
