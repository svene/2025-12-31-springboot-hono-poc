import {Hono} from "hono";
import {PeoplePageVM} from "./peoplepage-vm";
import {MpaLayout} from "../ui/components/mpalayout";

const URL = '/people';

function ui(vm: PeoplePageVM) {
	console.log(vm);
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
					{vm.people.map((it) => (
						<tr>
							<td>{it.firstName}</td>
							<td>{it.lastName}</td>
							<td>{it.streetName}</td>
						</tr>
					))}
				</table>
			</>
		</MpaLayout>
	);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PeoplePageVM;
		return c.render(ui(vm));
	});
}

export const peoplepage = {
	URL,
	init,
}
