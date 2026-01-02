import {Person} from "../ui/model";

function people(): Person[] {
	return [
		{firstName: 'John_dev', lastName: 'Lennon'},
		{firstName: 'Paul_dev', lastName: 'McCartney'},
		{firstName: 'George_dev', lastName: 'Harrison'},
		{firstName: 'Ringo_dev', lastName: 'Starr'},
	];
}

export const devService = {
	people
};
