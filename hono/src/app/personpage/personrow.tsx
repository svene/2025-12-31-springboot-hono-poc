import {personRoutes} from "./personpagerouting";
import {PersonTableRowModel} from "../../generated/types/vm-types";

export const PersonRow = (props: {vm: PersonTableRowModel}) => (
	<tr
		id={`row-${props.vm.id}`}
		style="cursor: pointer"
		hx-trigger="click"
		hx-target="this"
		hx-swap="outerHTML"
		hx-get={personRoutes.PersonDetails.url(props.vm.id)}
	>
		{/* htmx 4 only wires up hx-trigger on elements that also carry an action
		  * attribute (hx-get/post/etc); a bare "click consume" here would silently
		  * never run, so use hx-on:click to stop the checkbox click from also
		  * triggering the row's own click-to-expand handler. */}
		<td hx-on:click="event.stopPropagation()">
			<input type="checkbox" name="selection" value={props.vm.id} form="bulkDeleteForm"></input>
		</td>
		<td>{props.vm.firstName}</td>
		<td>{props.vm.lastName}</td>
		<td>{props.vm.streetName}</td>
		<td><span className="icon"><i className="material-icons">arrow_drop_down</i></span></td>
	</tr>

);
