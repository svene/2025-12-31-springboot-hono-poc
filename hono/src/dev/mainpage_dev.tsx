import {Hono} from "hono";
import {Person} from "../ui/model";
import {postForHtml} from "./dev_forwarder";
import {mainpage} from "../app/mainpage";

function init(hono: Hono) {
	hono.get(mainpage.URL, async (c) => {
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

export const mainpage_dev = {
	init,
}
