import { FormattedMessage } from 'react-intl';
import ExternalLink from '../generics/externalLink/ExternalLink';

export default function Home() {
	let age = new Date().getFullYear() - 2003;

	return (
		<main>
			<h1>
				<FormattedMessage id="HOME_HEADER" />
			</h1>
			<p style={{ lineHeight: 1.85 }}>
				<FormattedMessage
					id="HOME_CONTENT"
					values={{
						age,
						currentCompany: <ExternalLink to="https://unike.tech/">unike.TECH</ExternalLink>,
						br: <br />,
					}}
				/>
			</p>
			<br />
			<p>email: thomasalmeidar@gmail.com</p>
			<p>
				github: <ExternalLink to="https://github.com/thomasreichmann">@thomasreichmann</ExternalLink>
			</p>
			<p>
				linkedin: <ExternalLink to="https://linkedin.com/in/thomasreichmann">@thomasreichmann</ExternalLink>
			</p>
		</main>
	);
}
