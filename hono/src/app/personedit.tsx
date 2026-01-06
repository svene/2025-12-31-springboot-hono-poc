import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/edit';

function ui(vm: PersonTableRowModel) {
	return (
		<tr>
			<form>
				<td><input class="input" type="text" value={vm.firstName}></input></td>
				<td><input class="input" type="text" value={vm.lastName}></input></td>
				<td><input class="input" type="text" value={vm.streetName}></input></td>
			</form>
		</tr>
	);
}


function init(hono: Hono) {
	hono.post('/person/edit', async (c) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(ui(vm));
	});
}

export const personedit = {
	URL,
	init,
}
