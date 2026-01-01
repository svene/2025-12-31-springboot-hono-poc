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
