import {Hono} from "hono";
import { serveStatic } from 'hono/bun';
import {greeting} from "./misc/greeting";
import {PERSON_PAGE_URL, personPageRouting} from "./personpage/personpagerouting";
import {miscRouting} from "./misc/misc-routing";
import {eventPersonPageRouting} from "./personpage/eventvariant/eventpersonpagerouting";

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.get('/', (c) => {
		return c.redirect(PERSON_PAGE_URL);
	});
	personPageRouting.init(hono);
	eventPersonPageRouting.init(hono);
	miscRouting.init(hono);
	greeting.init(hono);
}

export const app = {
	init,
}
