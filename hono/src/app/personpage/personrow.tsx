import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/row';

export const PersonRow = (props: {vm: PersonTableRowModel}) => (
	<tr
		id={`row-${props.vm.id}`}
		style="cursor: pointer"
		hx-trigger="click"
		hx-target="this"
		hx-swap="outerHTML"
		hx-get={`/person/${props.vm.id}/details`}
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

function ui(vm: PersonTableRowModel) {
	return (
		<PersonRow vm={vm}/>
	);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonTableRowModel;
		return c.render(ui(vm));
	});
}

export const personrow = {
	URL,
	init,
}
