import {Context, Hono} from "hono";
import {personRoutes} from "../personpage/personpagerouting";
import {miscRoutes} from "./miscrouting";

export const ROUTER_URL = '/router';
const unsupported = (name: string) => async (c: Context) => {
	return c.text(`Unsupported name: ${name ?? '(missing)'}`, 400)
}

const routes: Record<string, (c: Context) => Promise<Response>> = {
	...miscRoutes,
	...personRoutes,
};

function init(hono: Hono) {
	hono.post(ROUTER_URL, async (c) => {
		const name = c.req.query('name') || 'name-missing';

		const handler = routes[name] ?? unsupported(name);
		return handler(c);
	});
}
export const appRouting = {
	init,
}
