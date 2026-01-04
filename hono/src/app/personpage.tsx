import {Hono} from "hono";
import {PersonPageModel, PersonTableRowModel} from "./person-page-model-vm";
import {MpaLayout} from "../ui/components/mpalayout";
import hono from "../index";

const URL = '/people';

function ui(vm: PersonPageModel) {
	return (
		<MpaLayout selectedMenu="people">
			<>
				<table class="table">
					<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Street</th>
					</tr>
					</thead>
					<tbody>
					{vm.table.people.map((it) => (
						<tr hx-trigger="dblclick" hx-target="this" hx-swap="outerHTML" hx-get={`/person/${it.id}/edit`}>
							<td>{it.firstName}</td>
							<td>{it.lastName}</td>
							<td>{it.streetName}</td>
						</tr>
					))}
					</tbody>
				</table>

				<div>{vm.table.people.length} of total {vm.total}</div>
			</>
		</MpaLayout>
	);
}

function editUi(vm: PersonTableRowModel) {
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
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonPageModel;
		return c.render(ui(vm));
	});

	hono.post('/person/edit', async (c) => {
		const vm = await c.req.json() as PersonTableRowModel;
		console.log(vm);
		return c.render(editUi(vm));
	});
}

export const personpage = {
	URL,
	init,
}
