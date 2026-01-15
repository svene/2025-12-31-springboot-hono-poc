import {PersonTableRowModel} from "./person-page-model-vm";
import {PersonRow} from "./personrow";

export const PersonDetailsBack = (props: { vm: PersonTableRowModel }) => (
		<>
{/*
			<hx-partial hx-target="closest tr" hx-swap="outerHTML">
				<PersonRow vm={vm}/>
			</hx-partial>

			<hx-partial hx-target="next tr" hx-swap="outerHTML">
			</hx-partial>
*/}
			<PersonRow vm={props.vm}/>
			<div id={`row-${props.vm.id}-details`} hx-swap-oob="outerHTML">
			</div>

		</>
);
