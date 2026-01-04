import {Hono} from "hono";
import {callPostEndpoint} from "./infra/dev_forwarder";
import {peoplepage} from "../app/peoplepage";
import {devService} from "./dev_service";
import {PersonPageModel} from "../app/person-page-model-vm";

function init(hono: Hono) {

	hono.get(peoplepage.URL, async (c) => {
		const vm: PersonPageModel = { table: {people: devService.people()}};
		return c.html(await callPostEndpoint(c.req.url, vm));
	});
}

/**
 * Simulation of SpringBoot App
 */
export const devapp = {
	init,
}
