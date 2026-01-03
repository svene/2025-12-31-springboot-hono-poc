import type { ComponentChildren } from 'hono/jsx'
import {HEAD} from "./head";

export const BulmaPage = (props: { children: ComponentChildren }) => (
	<html lang="en">
	{HEAD}

	<body>
	<div className="container mt-1">

		<div className="p-1 mt-1">
			{props.children}
		</div>

		<hr/>
		<a href="/logout">Logout</a> | <a href="/greeting?greetee=You">Greeting</a>
	</div>

	</body>
	</html>
);

