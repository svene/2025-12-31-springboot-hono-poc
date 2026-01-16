import {PersonDetailModel} from "./person-page-model-vm";
import {PersondetailsCard} from "./persondetailscard";

export const PersonEditBack = (props: { vm: PersonDetailModel }) => (
	<PersondetailsCard vm={props.vm}/>
);
