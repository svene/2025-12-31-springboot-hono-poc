import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/edit';

function ui(vm: PersonTableRowModel) {
	return (
		<tr>
			<td colSpan={4}>
				<div class="card p-5">
				<form>
					<div class="fixed-grid">
						<div class="grid">
							<div class="cell">
								<div class="field">
									<label class="label">Firstname</label>
									<div class="control">
										<input class="input" type="text" value={vm.firstName}></input>
									</div>
								</div>
							</div>
							<div class="cell">
								<div class="field">
									<label class="label">Lastname</label>
									<div class="control">
										<input class="input" type="text" value={vm.lastName}></input>
									</div>
								</div>
							</div>
							<div class="cell">
								<div class="field">
									<label class="label">Street</label>
									<div class="control">
										<input class="input" type="text" value={vm.streetName}></input>
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav class="level">
						<button class="level-item button">&lt; Back</button>
						<button class="level-item button is-primary">Save</button>
					</nav>
				</form>
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

export const personedit = {
	URL,
	init,
}
