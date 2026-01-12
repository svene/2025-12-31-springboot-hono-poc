import {Hono} from "hono";
import {PersonDetailModel, PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/details';

function ui(vm: PersonDetailModel) {
	return (
		<>
			<tr
				id={`row-${vm.id}`}
				hx-trigger="click"
				hx-target="this"
				hx-swap="outerHTML"
				hx-get={`/person/${vm.id}/detailsback`}
			>
				<td style="border-style: none"></td>
				<td style="border-style: none">{vm.firstName}</td>
				<td style="border-style: none">{vm.lastName}</td>
				<td style="border-style: none">{vm.streetName}</td>
			</tr>
			<tr
				id={`row-${vm.id}-details`}
				style="cursor: pointer"
				hx-trigger="click"
				hx-target="this"
				hx-swap="outerHTML"
				hx-get={`/person/${vm.id}/edit`}
			>
				<td colSpan={4} style="padding-left: 30px">

						<div class="card p-5 my-2 mx-0">
							<div class="mb-1"><strong>Street:</strong> {vm.streetName} {vm.streetNo}</div>
							<div class="mb-1"><strong>City:</strong> {vm.zipCode} {vm.city}</div>
							<div class="mb-1"><strong>Mailbox:</strong> {vm.mailBox}</div>
							<div class="mb-1"><strong>Phone:</strong> {vm.phoneNumber}</div>
							<div class="mb-3"><strong>Cellphone:</strong> {vm.cellPhone}</div>
						</div>
				</td>
			</tr>
		</>
);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonDetailModel;
		return c.render(ui(vm));
	});
}

export const persondetails = {
	URL,
	init,
}
