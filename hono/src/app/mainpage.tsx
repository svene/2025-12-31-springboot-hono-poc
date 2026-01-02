import {Hono} from "hono";
import {Person} from "../ui/model";
import {mainpage_ui} from "../ui/mainpage_ui";

export const URL = '/people';

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		console.log('in POST');
		const people = await c.req.json() as Person[];
		return c.render(mainpage_ui.ui(people));
	});
}

export const mainpage = {
	URL,
	init,
}
