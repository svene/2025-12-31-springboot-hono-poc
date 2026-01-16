import {Hono} from "hono";
import {PersonEditor} from "./personedit";
import {PersonDetails} from "./persondetails";
import {PersonDetailsBack} from "./persondetailsback";
import {PersonTable} from "./persontable";
import {PersonPage} from "./personpage";
import {
	PersonDetailModel,
	PersonEditModel,
	PersonPageModel,
	PersonTableModel,
	PersonTableRowModel
} from "./person-page-model-vm";
import {PersonRow} from "./personrow";
import {PersonEditBack} from "./personeditback";

export const PERSON_PAGE_URL = '/page/people';
const PERSON_TABLE_URL = '/persontable';
const PERSON_DETAILS_URL = '/person/details';
const PERSON_EDIT_URL = '/person/edit';
const PERSON_ROW_URL = '/person/row';
const PERSON_DETAILS_BACK_URL = '/person/detailsback';
const PERSON_EDIT_BACK_URL = '/person/editback';

function init(hono: Hono) {
	hono.post(PERSON_PAGE_URL, async (c) => {
		const vm = await c.req.json() as PersonPageModel;
		return c.render(<PersonPage vm={vm}></PersonPage>);
	});
	hono.post(PERSON_DETAILS_URL, async (c) => {
		const vm = await c.req.json() as PersonDetailModel;
		return c.render(<PersonDetails vm={vm}></PersonDetails>);
	});
	hono.post(PERSON_EDIT_URL, async (c) => {
		const vm = await c.req.json() as PersonEditModel;
		return c.render(<PersonEditor vm={vm}></PersonEditor>);
	});

	hono.post(PERSON_ROW_URL, async (c) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(<PersonRow vm={vm}></PersonRow>);
	});

	hono.post(PERSON_DETAILS_BACK_URL, async (c) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(<PersonDetailsBack vm={vm}></PersonDetailsBack>);
	});

	hono.post(PERSON_TABLE_URL, async (c) => {
		const vm = await c.req.json() as PersonTableModel;
		return c.render(<PersonTable vm={vm}></PersonTable>);
	});

	hono.post(PERSON_EDIT_BACK_URL, async (c) => {
		const vm = await c.req.json() as PersonDetailModel;
		return c.render(<PersonEditBack vm={vm}></PersonEditBack>);
	});

}

export const personPageRouting = {
	init,
}
