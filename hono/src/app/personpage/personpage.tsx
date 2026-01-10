import {Hono} from "hono";
import {PersonPageModel} from "./person-page-model-vm";
import {MpaLayout} from "../../ui/components/mpalayout";
import {personedit} from "./personedit";
import {persondetails} from "./persondetails";
import {PersonRow, personrow} from "./personrow";

const URL = '/people';

function x(e: MouseEvent) {
	e.preventDefault();
}

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
				<form hx-post="/person/delete">
				<table class="table" style="width: 100%">
					<thead>
					<tr>
						<th></th>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Street</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					{vm.table.people.map((it) => (<PersonRow vm={it}/>))}
					</tbody>
				</table>
				</form>

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
