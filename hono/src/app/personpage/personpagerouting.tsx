import {Context} from "hono";
import {PersonEditor} from "./personedit";
import {PersonDetails} from "./persondetails";
import {PersonDetailsBack} from "./persondetailsback";
import {PersonTable} from "./persontable";
import {PersonPage} from "./personpage";
import {PersonDetailModel, PersonEditModel, PersonPageModel, PersonTableModel, PersonTableRowModel} from "../../generated/types/vm-types";
import {PersonRow} from "./personrow";
import {PersonEditBack} from "./personeditback";
import {RouteDefinition} from "../common/app-types";

export const personRoutes = {
	PersonPage: {
		url: () => `/page/people`,
		render: async (c: Context) => {
			const vm = await c.req.json() as PersonPageModel;
			return c.render(<PersonPage vm={vm}></PersonPage>);
		}
	},
	PersonTable: {
		url: () => `/persontable`,
		render: async (c: Context) => {
			const vm = await c.req.json() as PersonTableModel;
			return c.render(<PersonTable vm={vm}></PersonTable>);
		}
	},
	PersonDetails: {
		url: (id: number) => `/person/${id}/details`,
		render: async (c: Context) => {
			const vm = await c.req.json() as PersonDetailModel;
			return c.render(<PersonDetails vm={vm}></PersonDetails>);
		}
	},
	PersonEditor: {
		url: (id: number) => `/person/${id}/edit`,
		render: async (c: Context) => {
			const vm = await c.req.json() as PersonEditModel;
			return c.render(<PersonEditor vm={vm}></PersonEditor>);
		},
	},
	PersonRow: {
		url: () => "NO-URL_for_PersonRow", // TODO: verify
		render: async (c: Context) => {
			const vm = await c.req.json() as PersonTableRowModel;
			return c.render(<PersonRow vm={vm}></PersonRow>);
		}
	},
	PersonDetailsBack: {
		url: (id: number) => `/person/${id}/detailsback`,
		render: async (c: Context) => {
			const vm = await c.req.json() as PersonTableRowModel;
			return c.render(<PersonDetailsBack vm={vm}></PersonDetailsBack>);
		}
	},
	PersonEditBack: {
		url: (id: number) => `/person/${id}/editback`,
		render: async (c: Context) => {
			const vm = await c.req.json() as PersonDetailModel;
			return c.render(<PersonEditBack vm={vm}></PersonEditBack>);
		}
	},
} satisfies Record<string, RouteDefinition>;

