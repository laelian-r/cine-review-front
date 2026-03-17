import "../styles/Header.css";

export default function Header() {
	return (
		<>
			<header>
				<a href="/">
					<h1>App</h1>
				</a>
				<nav>
					<ul>
						<li>
							<Buttons href="/login" text="Connexion" />
						</li>
						<li>
							<Buttons
								className="sign-up"
								href="/register"
								text="Inscription"
							/>
						</li>
					</ul>
				</nav>
			</header>
			;
		</>
	);
}
