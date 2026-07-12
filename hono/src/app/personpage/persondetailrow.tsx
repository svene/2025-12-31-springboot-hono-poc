import {personRoutes} from "./personpagerouting";
import {PersonDetailModel} from "../../generated/types/vm-types";

export const PersondetailsRow = (props: { vm: PersonDetailModel }) => (
		<>
			<tr
				id={`row-${props.vm.id}`}
				style="cursor: pointer"
				hx-trigger="click"
				hx-target="this"
				hx-swap="outerHTML"
				hx-get={personRoutes.PersonDetailsBack.url(props.vm.id)}
			>
				<td style="border-style: none"></td>
				<td style="border-style: none">{props.vm.firstName}</td>
				<td style="border-style: none">{props.vm.lastName}</td>
				<td style="border-style: none">{props.vm.streetName}</td>
				<td style="border-style: none"><span className="icon"><i className="material-icons">arrow_drop_up</i></span></td>
			</tr>
		</>
);
