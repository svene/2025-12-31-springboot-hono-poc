import {Hono} from "hono";
import {dev_api} from "./dev_api";

function init(hono: Hono) {
	dev_api.init(hono);
}

export const dev = {
	init,
}
