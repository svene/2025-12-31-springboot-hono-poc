import {MpaLayout} from "../../ui/components/mpalayout";
import {PersonTable} from "./persontable";

import {personRoutes} from "./personpagerouting";
import {PersonPageModel} from "../../generated/types/vm-types";

export const PersonPage = (props: { vm: PersonPageModel }) => (
	<MpaLayout selectedMenu="people">
		<>
			<div class="field">
				<label class="label">Search</label>
				<div class="control">
					<input
						class="input"
						type="search"
						name="search"
						placeholder="Search for firstname or lastname"
						hx-trigger="input changed delay:500ms"
						hx-get={personRoutes.PersonTable.url()}
						hx-target="#result-table"
					/>
				</div>
			</div>
			<PersonTable vm={props.vm.table}></PersonTable>
		</>
	</MpaLayout>
);
