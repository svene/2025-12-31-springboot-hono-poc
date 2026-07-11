import {InfoPage} from "./infopage";
import {Context} from "hono";

export const miscRoutes = {
	InfoPage: async (c: Context) => {
		return c.render(<InfoPage></InfoPage>);
	},
}

