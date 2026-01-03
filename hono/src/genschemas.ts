import * as z from "zod";
import {PeopleSchema} from "./ui/model";

const x = z.toJSONSchema(PeopleSchema, {
	//target: "openapi-3.0",
	reused: "ref"
});

console.log(JSON.stringify(x, null, 2));
