import {Hono} from "hono";
import {InfoPage} from "./infopage";

export const INFO_PAGE_URL = '/info';

function init(hono: Hono) {
	hono.get(INFO_PAGE_URL, async (c) => {
		return c.render(<InfoPage></InfoPage>);
	});
}
export const miscRouting = {
	init,
}
