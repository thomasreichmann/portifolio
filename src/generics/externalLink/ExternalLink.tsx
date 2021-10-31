import './ExternalLink.css';

interface ExternalLinkProps {
	children: any;
	to: string;
}

export default function ExternalLink(props: ExternalLinkProps) {
	return (
		<a href={props.to} rel="noreferrer" target="_blank" className="external-link">
			{props.children}
		</a>
	);
}
