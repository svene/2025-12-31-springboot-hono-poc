import {Hono} from "hono";
import {devapp} from "./devapp";

function init(hono: Hono) {
	devapp.init(hono);
}

export const dev = {
	init,
}
