import {Hono} from "hono";
import {PersonEditModel} from "./person-page-model-vm";

const URL = '/person/edit';

function ui(vm: PersonEditModel) {
	return (
		<tr>
			<td colSpan={4} style="padding: 0px">
				<div class="card p-5 my-2">
					<form hx-put={`/person/${vm.id}`}>
						<div class="fixed-grid">
							<div class="grid">
								<div class="cell">
									<div class="field">
										<label class="label">Firstname</label>
										<div class="control">
											<input class="input" type="text" name="firstName" value={vm.firstName}></input>
										</div>
									</div>
								</div>
								<div class="cell">
									<div class="field">
										<label class="label">Lastname</label>
										<div class="control">
											<input class="input" type="text" name="lastName" value={vm.lastName}></input>
										</div>
									</div>
								</div>
								<div class="cell">
									<div class="field">
										<label class="label">Street</label>
										<div class="control">
											<input class="input" type="text" name="streetName" value={vm.streetName}></input>
										</div>
									</div>
								</div>
							</div>
						</div>
						<nav class="level">
							<button
								class="level-item button"
								hx-trigger="click consume"
								hx-target="closest tr"
								hx-swap="outerHTML"
								hx-get={`/person/${vm.id}/details`}
							>&lt; Back
							</button>
							<button
								type="submit"
								class="level-item button is-primary"
								hx-trigger="click consume"
								hx-put={`/person/${vm.id}`}
								hx-target="closest tr"
								hx-swap="outerHTML"
							>Save
							</button>
						</nav>
					</form>
				</div>
			</td>
		</tr>
	);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonEditModel;
		return c.render(ui(vm));
	});
}

export const personedit = {
	URL,
	init,
}
