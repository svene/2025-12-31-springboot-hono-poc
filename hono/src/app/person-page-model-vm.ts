/*
export type PersonTableRowVM = {
	firstName: string,
	lastName: string,
	streetName: string,
}

export type PeoplePageVM = {
	people: PersonTableRowVM[],
}
*/

export type PersonTableRowModel = {
	firstName: string,
	lastName: string,
	streetName: string,
}

export type PersonTableModel = {
	people: PersonTableRowModel[],
}
export type PersonPageModel = {
	table: PersonTableModel,
}
