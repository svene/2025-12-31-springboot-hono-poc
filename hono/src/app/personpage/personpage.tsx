import {Hono} from "hono";
import {PersonPageModel} from "./person-page-model-vm";
import {MpaLayout} from "../../ui/components/mpalayout";
import {PersonRow} from "./personrow";

const URL = '/people';

function ui(vm: PersonPageModel) {
	return (
		<MpaLayout selectedMenu="people">
			<>
				<div class="field">
					<label class="label">Search</label>
					<div class="control">
						<input class="input" type="search" placeholder="Search for firstname or lastname"/>
					</div>
				</div>
					<table class="table">
						<thead>
						<tr>
							<td colSpan={4}>
								<form id="bulkDeleteForm" hx-delete="/person/delete">
									<button type="submit" class="button">Delete</button>
								</form>
							</td>
						</tr>
						<tr>
							<th></th>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Street</th>
						</tr>
						</thead>
						<tbody>
						{vm.table.people.map((it) => (<PersonRow vm={it}/>))}
						</tbody>
					</table>


				<div>{vm.table.people.length} of total {vm.total}</div>
			</>
		</MpaLayout>
	);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonPageModel;
		return c.render(ui(vm));
	});
}

export const personpage = {
	URL,
	init,
}
