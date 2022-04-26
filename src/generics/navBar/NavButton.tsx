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
					className={({ isActive }) => {
						if (!isActive) return 'inactive';
						if (window.location.pathname === '/') return 'App-nav-active';

						return 'inactive';
					}}
				>
					{props.children}
				</NavLink>
			) : (
				<NavLink to={props.to} className={({ isActive }) => (isActive ? 'App-nav-active' : 'inactive')}>
					{props.children}
				</NavLink>
			)}
		</>
	);
}

export default NavButton;
