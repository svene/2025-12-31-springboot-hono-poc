import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/row';

function ui(vm: PersonTableRowModel) {
	return (
		<tr hx-trigger="click" hx-target="this" hx-swap="outerHTML" hx-get={`/person/${vm.id}/details`}>
			<td>{vm.firstName}</td>
			<td>{vm.lastName}</td>
			<td>{vm.streetName}</td>
			<td>
				<button className="button">Delete</button>
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

export const personrow = {
	URL,
	init,
}
