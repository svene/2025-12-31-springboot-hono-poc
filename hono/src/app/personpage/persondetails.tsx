import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/details';

function ui(vm: PersonTableRowModel) {
	return (
		<tr
			style="cursor: pointer"
			hx-trigger="click"
			hx-target="this"
			hx-swap="outerHTML"
			hx-get={`/person/${vm.id}/edit`}
		>
			<td colSpan={4} style="padding: 0px">
				<div class="card p-5 my-2 mx-0">
					<nav class="level">
						<div class="level-left">
							<div class="level-item">
								<p class="title">{vm.firstName} {vm.lastName}</p>
							</div>
						</div>
					</nav>
					<nav class="level">
						<div class="level-left">
							<div class="level-item">
								<p class="subtitle">{vm.streetName}</p>
							</div>
						</div>
					</nav>
					<button
						class="level-item button"
						hx-trigger="click consume"
						hx-target="closest tr"
						hx-swap="outerHTML"
						hx-get={`/person/${vm.id}/row`}
					>&lt; Back
					</button>
				</div>
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
