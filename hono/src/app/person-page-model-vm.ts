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
	total: number,
}
