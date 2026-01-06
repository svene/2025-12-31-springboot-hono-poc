import {Hono} from "hono";
import {callPostEndpoint} from "./infra/dev_forwarder";
import {personpage} from "../app/personpage/personpage";
import {devService} from "./dev_service";
import {PersonPageModel} from "../app/personpage/person-page-model-vm";

function init(hono: Hono) {

	hono.get(personpage.URL, async (c) => {
		const people = devService.people();
		const vm: PersonPageModel = {
			table: {people},
			total: people.length,
		};
		return c.html(await callPostEndpoint(c.req.url, vm));
	});
}

/**
 * Simulation of SpringBoot App
 */
export const devapp = {
	init,
}
