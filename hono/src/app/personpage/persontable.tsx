import {PersonRow} from "./personrow";
import {PersonTableModel} from "../../generated/types/vm-types";

export const PersonTable = (props: { vm: PersonTableModel }) => (
	<div id="result-table">
		<table className="table">
			<thead>
			<tr>
				<td colSpan={5}>
					<form id="bulkDeleteForm" hx-delete="/person/delete">
						<button type="submit" className="button">
							<span className="icon"><i className="material-icons">delete</i></span>
							<span>Delete</span>
						</button>
					</form>
				</td>
			</tr>
			<tr>
				<th></th>
				<th>Firstname</th>
				<th>Lastname</th>
				<th>Street</th>
				<th></th>
			</tr>
			</thead>
			<tbody>
			{props.vm.people.map((it) => (<PersonRow vm={it}/>))}
			</tbody>
		</table>
		<div>{props.vm.people.length} of total {props.vm.total}</div>

	</div>
);
