import {Hono} from "hono";
import {PersonPageModel} from "./person-page-model-vm";
import {MpaLayout} from "../ui/components/mpalayout";

const URL = '/info';

function ui() {
	return (
		<MpaLayout selectedMenu="info">
			<div className="p-1">
				<div className="content">
					<p>This Application demonstrates the SpringBoot to Hono Architecture</p>
				</div>

			</div>
		</MpaLayout>
	);
}

function init(hono: Hono) {
	hono.get(URL, async (c) => {
		return c.render(ui());
	});
}

export const infopage = {
	URL,
	init,
}
