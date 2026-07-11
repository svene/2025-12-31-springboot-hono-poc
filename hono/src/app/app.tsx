import {Hono} from "hono";
import { serveStatic } from 'hono/bun';
import {appRouting} from "./misc/app-router";

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	appRouting.init(hono);
}

export const app = {
	init,
}
