import {Hono} from "hono";
import { serveStatic } from 'hono/bun';
import {infopage} from "./infopage";
import {greeting} from "./greeting";
import {PERSON_PAGE_URL, personPageRouting} from "./personpage/personpagerouting";

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.get('/', (c) => {
		return c.redirect(PERSON_PAGE_URL);
	});
	personPageRouting.init(hono);
	infopage.init(hono);
	greeting.init(hono);
}

export const app = {
	init,
}
