import {Hono} from "hono";
export const URL = '/';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<html lang="en">
			<head>
				<meta charset="UTF-8"/>
			</head>

			<body>
			<div>
				<h1>Application</h1>
				<ul>
					<li><a href="/greeting?greetee=You" target="_blank">Greeting</a></li>
				</ul>

				<a href="/logout">Logout</a>
			</div>
			</body>
			</html>
		)
	});

	initGreeting(app);
}

function initGreeting(app: Hono) {
	app.get('/greeting', (c) => {
		const greetee = c.req.query('greetee') ?? '-';
		return c.render(
			<html lang="en">
			<head>
				<meta charset="UTF-8"/>
			</head>

			<body>
			<div>
				<div>Hello {greetee} !</div>
			</div>
			</body>
			</html>
		)
	});
}

export const mainpage = {
	URL,
	init,
}
