import type { ComponentChildren } from 'hono/jsx'
import {personpage} from "../../app/personpage/personpage";
import {infopage} from "../../app/infopage";

export const MpaLayout = (props: {selectedMenu: string, children: ComponentChildren }) => (
	<html lang="en">
	<head>
		<meta charSet="UTF-8"/>
		<title>People Admin Application</title>
		<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"/>
		<script src="/static/js/htmx.org/2.0.8/htmx.js"></script>
		<link rel="stylesheet" href="/static/css/bulma.min.css"/>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css "/>
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
					<a class={`navbar-item ${props.selectedMenu === 'people' ? 'is-selected' : ''}`} href={personpage.URL}>People</a>
					<a class={`navbar-item ${props.selectedMenu === 'info' ? 'is-selected' : ''}`} href={infopage.URL}>Info</a>
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

