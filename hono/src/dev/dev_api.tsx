import {Hono} from "hono";
import {callPostEndpoint} from "./dev_forwarder";
import {mainpage, VM as MainPageVM} from "../app/mainpage";
import {devService} from "./dev_service";

function init(hono: Hono) {

	hono.get(mainpage.URL, async (c) => {
		return c.html(await callPostEndpoint<MainPageVM>(
			c.req.url, {people: devService.people()})
		);
	});
}

export const dev_api = {
	init,
}
