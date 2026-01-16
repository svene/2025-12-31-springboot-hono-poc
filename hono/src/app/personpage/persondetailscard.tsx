import {PersonDetailModel} from "./person-page-model-vm";
import {SpringUrls} from "./spring-urls";

export const PersondetailsCard = (props: { vm: PersonDetailModel }) => (
		<>
			<tr
				id={`row-${props.vm.id}-details`}
				style="cursor: pointer"
				hx-trigger="click"
				hx-target="this"
				hx-swap="outerHTML"
				hx-get={SpringUrls.Person.edit(props.vm.id)}
			>
				<td colSpan={4} style="padding-left: 30px">

						<div class="card p-5 my-2 mx-0">
							<div class="mb-1"><strong>Street:</strong> {props.vm.streetName} {props.vm.streetNo}</div>
							<div class="mb-1"><strong>City:</strong> {props.vm.zipCode} {props.vm.city}</div>
							<div class="mb-1"><strong>Mailbox:</strong> {props.vm.mailBox}</div>
							<div class="mb-1"><strong>Phone:</strong> {props.vm.phoneNumber}</div>
							<div class="mb-3"><strong>Cellphone:</strong> {props.vm.cellPhone}</div>
						</div>
				</td>
			</tr>
		</>
);
