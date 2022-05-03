import { FormattedMessage } from 'react-intl';
import './Projects.scss';

export default function Projects() {
	return (
		<main className="Projects">
			<h1>
				<FormattedMessage id="PROJECTS_HEADER" />
			</h1>
			<p>
				<FormattedMessage id="PROJECTS_TITLE" />
			</p>
			<ol reversed>
				<li>
					<h3>
						<a href="https://github.com/thomasreichmann/portifolio" className="listLink">
							portifolio
						</a>
					</h3>
					<p>
						<FormattedMessage id="PROJECTS_PORTIFOLIO_CONTENT" />
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/thomasreichmann/discord-bot-template" className="listLink">
							discord bot template
						</a>
					</h3>
					<p>
						<FormattedMessage id="PROJECTS_BOT_TEMPLATE_CONTENT" />
					</p>
				</li>
			</ol>
		</main>
	);
}
