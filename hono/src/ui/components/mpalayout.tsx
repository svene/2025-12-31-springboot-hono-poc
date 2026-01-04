import type { ComponentChildren } from 'hono/jsx'
import {peoplepage} from "../../app/peoplepage";

export const MpaLayout = (props: {selectedMenu: string, children: ComponentChildren }) => (
	<html lang="en">
	<head>
		<meta charSet="UTF-8"/>
		<title>People Admin Application</title>
		<script src="/static/js/htmx.org/2.0.8/htmx.js"></script>
		<link rel="stylesheet" href="/static/css/bulma.min.css"/>
	</head>

	<body>
	<section className="hero is-link">
		<div className="hero-body">
			<p className="title">People Admin Application</p>
		</div>
	</section>

	<div className="container mt-1">
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-menu">
				<div className="navbar-start">
					<a class={`navbar-item ${props.selectedMenu === 'people' ? 'is-selected' : ''}`} href={peoplepage.URL}>People</a>
					<a class={`navbar-item ${props.selectedMenu === 'info' ? 'is-selected' : ''}`} href={peoplepage.URL}>Info</a>
				</div>
			</div>
		</nav>

		<div className="p-1 mt-1 area-border" style="min-height: 500px">
			{props.children}
		</div>

		<hr/>

	</div>


	</body>
	</html>
);

