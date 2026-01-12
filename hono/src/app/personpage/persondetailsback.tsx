import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";
import {PersonRow} from "./personrow";

const URL = '/person/detailsback';

function ui(vm: PersonTableRowModel) {
	return (
		<>
{/*
			<hx-partial hx-target="closest tr" hx-swap="outerHTML">
				<PersonRow vm={vm}/>
			</hx-partial>

			<hx-partial hx-target="next tr" hx-swap="outerHTML">
			</hx-partial>
*/}
			<PersonRow vm={vm}/>
			<div id={`row-${vm.id}-details`} hx-swap-oob="outerHTML">
			</div>

		</>
)
	;
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(ui(vm));
	});
}

export const persondetailsback = {
	URL,
	init,
}
