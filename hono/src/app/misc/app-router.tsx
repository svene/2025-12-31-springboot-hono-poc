import {Hono} from "hono";
import {InfoPage} from "./infopage";

export const ROUTER_URL = '/router';

export const INFO_PAGE_URL = '/info';

function init(hono: Hono) {
	hono.post(ROUTER_URL, async (c) => {
		const name = c.req.query('name');
		switch (name) {
			case 'info': return c.render(<InfoPage></InfoPage>);
			default: return c.text(`Unsupported name: ${name ?? '(missing)'}`, 400);
		}
	});
}
export const appRouting = {
	init,
}
