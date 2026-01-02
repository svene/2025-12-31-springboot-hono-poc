import {Hono} from "hono";
import {Person} from "../ui/model";
import {BulmaPage} from "../ui/components/bulmapage";

export const URL = '/people';

function ui(people: Person[]) {
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
					{people.map((it) => (
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
		console.log('in POST');
		const people = await c.req.json() as Person[];
		return c.render(ui(people));
	});
}

export const mainpage = {
	URL,
	init,
}
