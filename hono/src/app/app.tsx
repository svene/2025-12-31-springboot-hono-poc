import {Hono} from "hono";
import { serveStatic } from 'hono/bun';
import {greeting} from "./misc/greeting";
import {PERSON_PAGE_URL, personPageRouting} from "./personpage/personpagerouting";
import {miscRouting} from "./misc/misc-routing";

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.get('/', (c) => {
		return c.redirect(PERSON_PAGE_URL);
	});
	personPageRouting.init(hono);
	miscRouting.init(hono);
	greeting.init(hono);
}

export const app = {
	init,
}
