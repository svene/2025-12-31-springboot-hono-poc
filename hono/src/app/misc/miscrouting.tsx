import {InfoPage} from "./infopage";

export const miscRoutes = {
	InfoPage: async (c) => {
		return c.render(<InfoPage></InfoPage>);
	}
}

