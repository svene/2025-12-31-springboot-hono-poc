import {Hono} from "hono";
import {PersonTableModel} from "./person-page-model-vm";
import {PersonRow} from "./personrow";

const URL = '/persontable';

export const PersonTable = (props: { vm: PersonTableModel }) => (
	<div id="result-table">
		<table className="table">
			<thead>
			<tr>
				<td colSpan={4}>
					<form id="bulkDeleteForm" hx-delete="/person/delete">
						<button type="submit" className="button">Delete</button>
					</form>
				</td>
			</tr>
			<tr>
				<th></th>
				<th>Firstname</th>
				<th>Lastname</th>
				<th>Street</th>
			</tr>
			</thead>
			<tbody>
			{props.vm.people.map((it) => (<PersonRow vm={it}/>))}
			</tbody>
		</table>
		<div>{props.vm.people.length} of total {props.vm.total}</div>

	</div>
);

function ui(vm: PersonTableModel) {
	return (
		<PersonTable vm={vm}></PersonTable>
	);
}

function init(hono: Hono) {
	hono.post(URL, async (c) => {
		const vm = await c.req.json() as PersonTableModel;
		return c.render(ui(vm));
	});
}

export const persontable = {
	URL,
	init,
}
