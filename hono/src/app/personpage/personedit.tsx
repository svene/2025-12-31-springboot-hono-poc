import {PersonSpringUrls} from "./personpagerouting";
import {PersonEditModel} from "../../generated/types/vm-types";

export const PersonEditor = (props: { vm: PersonEditModel }) => (
	<tr id={`row-${props.vm.id}-edit`}>
		<td colSpan={4} style="padding: 0px">
			<div class="card p-5 my-2">
				<form hx-put={`/person/${props.vm.id}`}>
					<div class="fixed-grid">
						<div class="grid">
							<div class="cell">
								<div class="field">
									<label class="label">Firstname</label>
									<div class="control">
										<input class="input" type="text" name="firstName" value={props.vm.firstName}></input>
									</div>
								</div>
							</div>
							<div class="cell">
								<div class="field">
									<label class="label">Lastname</label>
									<div class="control">
										<input class="input" type="text" name="lastName" value={props.vm.lastName}></input>
									</div>
								</div>
							</div>
							<div class="cell">
								<div class="field">
									<label class="label">Street</label>
									<div class="control">
										<input class="input" type="text" name="streetName" value={props.vm.streetName}></input>
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
							hx-get={PersonSpringUrls.Person.editBack(props.vm.id)}
						>&lt; Back
						</button>
						<button
							type="submit"
							class="level-item button is-primary"
							hx-trigger="click consume"
							hx-put={`/person/${props.vm.id}`}
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
