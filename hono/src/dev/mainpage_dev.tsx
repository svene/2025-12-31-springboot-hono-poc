import {Hono} from "hono";
import {Person} from "../ui/model";
import {mainpage_ui} from "../ui/mainpage_ui";
import {postForHtml} from "./dev_forwarder";

export const URL = '/people';

function init(hono: Hono) {
	hono.get(URL, async (c) => {
		const people: Person[] = [
			{firstName: 'John_dev', lastName: 'Lennon'},
			{firstName: 'Paul_dev', lastName: 'McCartney'},
			{firstName: 'George_dev', lastName: 'Harrison'},
			{firstName: 'Ringo_dev', lastName: 'Starr'},
		];

		return  c.html(await postForHtml({
			url: c.req.url,
			data: people,
		}))
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
