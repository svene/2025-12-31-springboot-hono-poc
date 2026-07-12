import {Context, Hono} from "hono";
import {serveStatic} from 'hono/bun';
import {personRoutes} from "./personpage/personpagerouting";
import {miscRoutes} from "./misc/miscrouting";
import {RouteDefinition} from "./common/app-types";

const ROUTER_URL = '/router';

const unsupported = (name: string) => {
	return {
		render: async (c: Context) => {
			return c.text(`Unsupported route: ${name ?? '(missing)'}`, 400)
		}
	}
}
const routeDefinitions: Record<string, RouteDefinition> = {
	...miscRoutes,
	...personRoutes,
};

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.post(ROUTER_URL, async (c) => {
		const name = c.req.query('name') || 'name-missing';

		const routeDefinition = routeDefinitions[name] ?? unsupported(name);
		return routeDefinition.render(c);
	});
}

export const app = {
	init,
}

