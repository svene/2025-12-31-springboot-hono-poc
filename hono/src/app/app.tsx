import {Context, Hono} from "hono";
import {serveStatic} from 'hono/bun';
import {personRoutes} from "./personpage/personpagerouting";
import {miscRoutes} from "./misc/miscrouting";

const ROUTER_URL = '/router';

const unsupported = (name: string) => async (c: Context) => {
	return c.text(`Unsupported route: ${name ?? '(missing)'}`, 400)
}

const routes: Record<string, (c: Context) => Promise<Response>> = {
	...miscRoutes,
	...personRoutes,
};

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.post(ROUTER_URL, async (c) => {
		const name = c.req.query('name') || 'name-missing';

		const handler = routes[name] ?? unsupported(name);
		return handler(c);
	});
}

export const app = {
	init,
}
export const AppSpringUrls = {
	infoPage: '/info',
	personPage: '/page/people',
}
