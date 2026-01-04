import {Hono} from "hono";
import { serveStatic } from 'hono/bun';
import {peoplepage} from "./peoplepage";
import {greeting} from "./greeting";

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.get('/', (c) => {
		return c.redirect(peoplepage.URL);
	});
	peoplepage.init(hono);
	greeting.init(hono);
}

export const app = {
	init,
}
