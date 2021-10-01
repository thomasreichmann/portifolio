export default function Home() {
	let age = new Date().getFullYear() - 2003;

	return (
		<main>
			<h1>e ai</h1>
			<p>
				{age} anos 👦
				<br />
				full stack developer
				<br />
			</p>
		</main>
	);
}
