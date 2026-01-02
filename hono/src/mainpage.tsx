import {Hono} from "hono";
import {BulmaPage} from "./components/bulmapage";
import {Person} from "./model";

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
	hono.get(URL, (c) => {
		const people: Person[] = [
			{firstName: 'John', lastName: 'Lennon'},
			{firstName: 'Paul', lastName: 'McCartney'},
			{firstName: 'George', lastName: 'Harrison'},
			{firstName: 'Ringo', lastName: 'Starr'},
		];
		return c.render(ui(people));
	});

	hono.post(URL, async (c) => {
		const people = await c.req.json() as Person[];
		return c.render(ui(people));
	});
}

export const mainpage = {
	URL,
	init,
}
