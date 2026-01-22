import {PersonPageModel} from "../person-page-model-vm";
import {MpaLayout} from "../../../ui/components/mpalayout";
import {PersonTable} from "../persontable";
import {SpringUrls} from "../spring-urls";

export const EvtPersonPage = (props: { vm: PersonPageModel }) => (
	<MpaLayout selectedMenu="people-evt">
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
						hx-get={SpringUrls.Person.table()}
						hx-target="#result-table"
					/>
				</div>
			</div>
			<PersonTable vm={props.vm.table}></PersonTable>
		</>
	</MpaLayout>
);
