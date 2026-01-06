import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/details';

function ui(vm: PersonTableRowModel) {
	return (
		<tr hx-trigger="click" hx-target="this" hx-swap="outerHTML" hx-get={`/person/${vm.id}/edit`}>
			<td colspan={4}>
				<div><span>Firstname: {vm.firstName}</span> <span>Lastname: {vm.lastName}</span></div>
				<div>Street: {vm.streetName}</div>
			</td>
		</tr>
	);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(ui(vm));
	});
}

export const persondetails = {
	URL,
	init,
}
