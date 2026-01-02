import {Hono} from "hono";
import {BulmaPage} from "./components/bulmapage";
import {Person} from "./model";

export const URL = '/people';

function init(hono: Hono) {
	hono.get(URL, (c) => {
		const people: Person[] = [
			{firstName: 'John', lastName: 'Lennon'},
			{firstName: 'Paul', lastName: 'McCartney'},
			{firstName: 'George', lastName: 'Harrison'},
			{firstName: 'Ringo', lastName: 'Starr'},
		];
		return c.render(
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
		)
	});
}

export const mainpage = {
	URL,
	init,
}
