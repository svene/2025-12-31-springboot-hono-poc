import {InfoPage} from "./infopage";
import {Context} from "hono";
import {RouteDefinition} from "../common/app-types";

export const miscRoutes = {
	InfoPage: {
		url: () => `/info`,
		render: async (c: Context) => {
			return c.render(<InfoPage></InfoPage>);
		}
	},
} satisfies Record<string, RouteDefinition>;

