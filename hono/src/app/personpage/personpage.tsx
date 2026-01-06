import {Hono} from "hono";
import {PersonPageModel} from "./person-page-model-vm";
import {MpaLayout} from "../../ui/components/mpalayout";
import {personedit} from "./personedit";
import {persondetails} from "./persondetails";
import {personrow} from "./personrow";

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
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Street</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					{vm.table.people.map((it) => (
						<tr
							style="cursor: pointer"
							hx-trigger="click"
							hx-target="this"
							hx-swap="outerHTML"
							hx-get={`/person/${it.id}/details`}
						>
							<td>{it.firstName}</td>
							<td>{it.lastName}</td>
							<td>{it.streetName}</td>
							<td>
								<button class="button">Delete</button>
							</td>
						</tr>
					))}
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

	personedit.init(hono);
	persondetails.init(hono);
	personrow.init(hono);
}

export const personpage = {
	URL,
	init,
}
