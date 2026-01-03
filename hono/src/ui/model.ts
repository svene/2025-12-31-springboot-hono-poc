import * as z from "zod";

export const PersonSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
});

export const PeopleSchema = z.object({
	people: z.array(PersonSchema),
});

export type Person = {
	firstName: string,
	lastName: string,
}
