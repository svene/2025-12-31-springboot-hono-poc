export type PersonTableRowVM = {
	firstName: string,
	lastName: string,
	streetName: string,
}

export type PeoplePageVM = {
	people: PersonTableRowVM[],
}
