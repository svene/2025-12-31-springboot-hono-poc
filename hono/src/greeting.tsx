import {Hono} from "hono";
export const URL = '/greeting';

function init(hono: Hono) {
	hono.get(URL, (c) => {
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

export const greeting = {
	URL,
	init,
}
