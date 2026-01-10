import {Hono} from "hono";
import {PersonTableRowModel} from "./person-page-model-vm";

const URL = '/person/row';

export const PersonRow = (props: {vm: PersonTableRowModel}) => (
	<tr
		style="cursor: pointer"
		hx-trigger="click consume"
		hx-target="this"
		hx-swap="outerHTML"
		hx-get={`/person/${props.vm.id}/details`}
	>
		<td><input type="checkbox" name={props.vm.id + ''} onClick="{event.stopPropagation();}"></input></td>
		<td>{props.vm.firstName}</td>
		<td>{props.vm.lastName}</td>
		<td>{props.vm.streetName}</td>
		<td>
			<button className="button">Delete</button>
		</td>
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
