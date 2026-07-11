import {Context} from "hono";
import {PersonEditor} from "./personedit";
import {PersonDetails} from "./persondetails";
import {PersonDetailsBack} from "./persondetailsback";
import {PersonTable} from "./persontable";
import {PersonPage} from "./personpage";
import {PersonEditModel, PersonPageModel, PersonTableModel, PersonTableRowModel} from "./person-page-model-vm";
import {PersonRow} from "./personrow";
import {PersonEditBack} from "./personeditback";
import {PersonDetailModel} from "../../generated/types/vm-types";

export const personRoutes = {
	PersonPage: async (c: Context) => {
		const vm = await c.req.json() as PersonPageModel;
		return c.render(<PersonPage vm={vm}></PersonPage>);
	},
	PersonTable: async (c: Context) => {
		const vm = await c.req.json() as PersonTableModel;
		return c.render(<PersonTable vm={vm}></PersonTable>);
	},
	PersonDetails: async (c: Context) => {
		const vm = await c.req.json() as PersonDetailModel;
		return c.render(<PersonDetails vm={vm}></PersonDetails>);
	},
	PersonEditor: async (c: Context) => {
		const vm = await c.req.json() as PersonEditModel;
		return c.render(<PersonEditor vm={vm}></PersonEditor>);
	},
	PersonRow: async (c: Context) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(<PersonRow vm={vm}></PersonRow>);
	},
	PersonDetailsBack: async (c: Context) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(<PersonDetailsBack vm={vm}></PersonDetailsBack>);
	},
	PersonEditBack: async (c: Context) => {
		const vm = await c.req.json() as PersonDetailModel;
		return c.render(<PersonEditBack vm={vm}></PersonEditBack>);
	},
}
export const PersonSpringUrls = {
	Person: {
		details: (id: number) => `/person/${id}/details`,
		detailsBack: (id: number) => `/person/${id}/detailsback`,
		edit: (id: number) => `/person/${id}/edit`,
		editBack: (id: number) => `/person/${id}/editback`,
		table: () => `/persontable`,
	},
};
