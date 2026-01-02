import {Hono} from "hono";
import {BulmaPage} from "./components/bulmapage";
export const URL = '/greeting';

function init(hono: Hono) {
	hono.get(URL, (c) => {
		const greetee = c.req.query('greetee') ?? '-';
		return c.render(
			<BulmaPage>
					<div>Hello {greetee} !</div>
			</BulmaPage>
		)
	});
}

export const greeting = {
	URL,
	init,
}
