import {PersondetailsCard} from "./persondetailscard";
import {PersondetailsRow} from "./persondetailrow";
import {PersonDetailModel} from "../../generated/types/vm-types";

export const PersonDetails = (props: { vm: PersonDetailModel }) => (
		<>
			<PersondetailsRow vm={props.vm}/>
			<PersondetailsCard vm={props.vm}/>
		</>
);
