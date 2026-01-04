import {Hono} from "hono";
import {callPostEndpoint} from "./infra/dev_forwarder";
import {mainpage, VM as MainPageVM} from "../app/mainpage";
import {devService} from "./dev_service";

function init(hono: Hono) {

	hono.get(mainpage.URL, async (c) => {
		const vm: MainPageVM = {people: devService.people()};
		return c.html(await callPostEndpoint(c.req.url, vm));
	});
}

/**
 * Simulation of SpringBoot App
 */
export const devapp = {
	init,
}
