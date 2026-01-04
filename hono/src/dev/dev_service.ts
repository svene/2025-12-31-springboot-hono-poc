import {Person} from "../ui/model";

const PEOPLE_COUNT = 20;

function people(): Person[] {
	return Array.from({ length: PEOPLE_COUNT }, (_, idx) => {
		const id = idx + 1;
		return ({
			firstName: `Firstname ${id}`,
			lastName: `Lastname ${id}`,
		});
	});
}

export const devService = {
	people
};
