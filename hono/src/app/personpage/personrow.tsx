import {PersonTableRowModel} from "./person-page-model-vm";
import {PersonSpringUrls} from "./person-spring-urls";

export const PersonRow = (props: {vm: PersonTableRowModel}) => (
	<tr
		id={`row-${props.vm.id}`}
		style="cursor: pointer"
		hx-trigger="click"
		hx-target="this"
		hx-swap="outerHTML"
		hx-get={PersonSpringUrls.Person.details(props.vm.id)}
	>
		<td hx-trigger="click consume">
			<input type="checkbox" name="selection" value={props.vm.id} form="bulkDeleteForm"></input>
		</td>
		<td>{props.vm.firstName}</td>
		<td>{props.vm.lastName}</td>
		<td>{props.vm.streetName}</td>
		<td><span className="icon"><i className="material-icons">arrow_drop_down</i></span></td>
	</tr>

);
