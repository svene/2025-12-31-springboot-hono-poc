import {PersonDetailModel} from "./person-page-model-vm";
import {PersondetailsCard} from "./persondetailscard";
import {PersondetailsRow} from "./persondetailrow";

export const PersonDetails = (props: { vm: PersonDetailModel }) => (
		<>
			<PersondetailsRow vm={props.vm}/>
			<PersondetailsCard vm={props.vm}/>
		</>
);
