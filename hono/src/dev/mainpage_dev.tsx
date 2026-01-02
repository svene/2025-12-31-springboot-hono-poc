import {Hono} from "hono";
import {Person} from "../ui/model";
import {mainpage_ui} from "../ui/mainpage_ui";
import {do_post} from "./dev_forwarder";

export const URL = '/people';

function init(hono: Hono) {
	hono.get(URL, async (c) => {
		console.log('in GET');
		const people: Person[] = [
			{firstName: 'John', lastName: 'Lennon'},
			{firstName: 'Paul', lastName: 'McCartney'},
			{firstName: 'George', lastName: 'Harrison'},
			{firstName: 'Ringo', lastName: 'Starr'},
		];

		//const html = do_post(c.req.url, JSON.stringify(people))
		const res = await fetch(c.req.url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(people),
		})

		if (!res.ok) {
			return c.text('POST failed', 500)
		}

		const html = await res.text()
		return c.html(html)

	});
}

function init0(hono: Hono) {
	hono.get(URL, (c) => {
		const people: Person[] = [
			{firstName: 'John', lastName: 'Lennon'},
			{firstName: 'Paul', lastName: 'McCartney'},
			{firstName: 'George', lastName: 'Harrison'},
			{firstName: 'Ringo', lastName: 'Starr'},
		];
		return c.render(mainpage_ui.ui(people));
	});
}

export const mainpage_dev = {
	URL,
	init,
}
