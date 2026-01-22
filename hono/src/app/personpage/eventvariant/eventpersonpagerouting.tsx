import {Hono} from "hono";
import {
	PersonPageModel,
} from "../person-page-model-vm";
import {EvtPersonPage} from "./evt-personpage";

export const EVT_PERSON_PAGE_URL = '/page/eventpeople';


function init(hono: Hono) {
	hono.post(EVT_PERSON_PAGE_URL, async (c) => {
		const vm = await c.req.json() as PersonPageModel;
		return c.render(<EvtPersonPage vm={vm}></EvtPersonPage>);
	});
}

export const eventPersonPageRouting = {
	init,
}
