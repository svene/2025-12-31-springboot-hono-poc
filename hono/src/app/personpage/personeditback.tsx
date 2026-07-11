import {PersondetailsCard} from "./persondetailscard";
import {PersonDetailModel} from "../../generated/types/vm-types";

export const PersonEditBack = (props: { vm: PersonDetailModel }) => (
	<PersondetailsCard vm={props.vm}/>
);
