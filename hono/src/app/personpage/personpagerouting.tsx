import {Hono} from "hono";
import {PersonEditor} from "./personedit";
import {PersonDetails} from "./persondetails";
import {personrow} from "./personrow";
import {persondetailsback} from "./persondetailsback";
import {PersonTable} from "./persontable";
import {personpage} from "./personpage";
import {PersonDetailModel, PersonEditModel, PersonTableModel} from "./person-page-model-vm";

const PERSON_TABLE_URL = '/persontable';
const PERSON_DETAILS_URL = '/person/details';
const PERSON_EDIT_URL = '/person/edit';

function init(hono: Hono) {
	hono.post(PERSON_DETAILS_URL, async (c) => {
		const vm = await c.req.json() as PersonDetailModel;
		return c.render(<PersonDetails vm={vm}></PersonDetails>);
	});
	hono.post(PERSON_EDIT_URL, async (c) => {
		const vm = await c.req.json() as PersonEditModel;
		return c.render(<PersonEditor vm={vm}></PersonEditor>);
	});

	personrow.init(hono);
	persondetailsback.init(hono);

	hono.post(PERSON_TABLE_URL, async (c) => {
		const vm = await c.req.json() as PersonTableModel;
		return c.render(<PersonTable vm={vm}></PersonTable>);
	});

	personpage.init(hono);
}

export const personPageRouting = {
	init,
}
