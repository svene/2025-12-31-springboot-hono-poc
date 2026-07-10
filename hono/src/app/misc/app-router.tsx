import {Hono} from "hono";
import {personRoutes} from "../personpage/personpagerouting";
import {miscRoutes} from "./miscrouting";

export const ROUTER_URL = '/router';

function init(hono: Hono) {
	hono.post(ROUTER_URL, async (c) => {
		const name = c.req.query('name') || 'name-missing';
		const f = miscRoutes[name] ?? personRoutes[name];
		if (f) {
			return f(c);
		}
		return c.text(`Unsupported name: ${name ?? '(missing)'}`, 400)
	});
}
export const appRouting = {
	init,
}
