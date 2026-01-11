import {Hono} from "hono";
import { serveStatic } from 'hono/bun';
import {personpage} from "./personpage/personpage";
import {infopage} from "./infopage";
import {greeting} from "./greeting";
import {personedit} from "./personpage/personedit";
import {persondetails} from "./personpage/persondetails";
import {personrow} from "./personpage/personrow";
import {persontable} from "./personpage/persontable";

function init(hono: Hono) {
	hono.use('/static/*', serveStatic({ root: './' }))
	hono.get('/', (c) => {
		return c.redirect(personpage.URL);
	});
	personedit.init(hono);
	persondetails.init(hono);
	personrow.init(hono);
	persontable.init(hono);
	personpage.init(hono);
	infopage.init(hono);
	greeting.init(hono);
}

export const app = {
	init,
}
