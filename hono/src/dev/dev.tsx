import {Hono} from "hono";
import {mainpage_dev} from "./mainpage_dev";

function init(hono: Hono) {
	mainpage_dev.init(hono);
}

export const dev = {
	init,
}
