import {Hono} from "hono";
import { serveStatic } from 'hono/bun';
import {mainpage} from "./mainpage";
import {greeting} from "./greeting";

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.get('/', (c) => {
		return c.redirect(mainpage.URL);
	});
	mainpage.init(hono);
	greeting.init(hono);
}

export const app = {
	init,
}
