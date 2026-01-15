import {PersonDetailModel} from "./person-page-model-vm";

export const PersonDetails = (props: { vm: PersonDetailModel }) => (
		<>
			<tr
				id={`row-${props.vm.id}`}
				hx-trigger="click"
				hx-target="this"
				hx-swap="outerHTML"
				hx-get={`/person/${props.vm.id}/detailsback`}
			>
				<td style="border-style: none"></td>
				<td style="border-style: none">{props.vm.firstName}</td>
				<td style="border-style: none">{props.vm.lastName}</td>
				<td style="border-style: none">{props.vm.streetName}</td>
				<td style="border-style: none"><span className="icon"><i className="material-icons">arrow_drop_up</i></span></td>
			</tr>
			<tr
				id={`row-${props.vm.id}-details`}
				style="cursor: pointer"
				hx-trigger="click"
				hx-target="this"
				hx-swap="outerHTML"
				hx-get={`/person/${props.vm.id}/edit`}
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
