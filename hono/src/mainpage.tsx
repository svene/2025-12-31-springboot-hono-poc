import {Hono} from "hono";
import { BulmaPage } from "./components/bulmapage";
export const URL = '/people';

function init(hono: Hono) {
	hono.get(URL, (c) => {
		return c.render(
			<BulmaPage>
				<>
					<h1 class="title">Application</h1>
					<ul>
						<li><a href="/greeting?greetee=You">Greeting</a></li>
					</ul>

					<a href="/logout">Logout</a>
				</>
			</BulmaPage>
		)
	});
}

export const mainpage = {
	URL,
	init,
}
