export type PersonTableRowModel = {
	id: number,
	firstName: string,
	lastName: string,
	streetName: string,
}

export type PersonTableModel = {
	people: PersonTableRowModel[],
}
export type PersonPageModel = {
	table: PersonTableModel,
	total: number,
}

export type PersonEditModel = {
	id: number,
	firstName: string,
	lastName: string,
	streetName: string,
}

