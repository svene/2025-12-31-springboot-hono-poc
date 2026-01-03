import {Hono} from "hono";
import {PeopleSchema, Person} from "../ui/model";
import {BulmaPage} from "../ui/components/bulmapage";

const URL = '/people';

export type VM = {
	people: Person[],
}

function ui(vm: VM) {
	return (
		<BulmaPage>
			<>
				<h1 class="title">Application</h1>
				<table class="table">
					<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
					</tr>
					</thead>
					{vm.people.map((it) => (
						<tr>
							<td>{it.firstName}</td>
							<td>{it.lastName}</td>
						</tr>
					))}
				</table>
			</>
		</BulmaPage>
	);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const json = await c.req.json();
		const data = PeopleSchema.parse(json);
		return c.render(ui(data as VM));
	});
}

export const mainpage = {
	URL,
	init,
}
