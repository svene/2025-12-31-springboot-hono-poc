import * as fs from "fs";
import * as path from "path";
import * as z from "zod";
import {PeopleSchema} from "./ui/model";

const peopleSchema = z.toJSONSchema(PeopleSchema, {
	target: "openapi-3.0",
	reused: "ref"
});

const openApiDocument = {
	openapi: "3.0.3",
	info: {
		title: "People API",
		description: "API generated from Zod schemas",
		version: "1.0.0",
	},
	paths: {
		"/people": {
			get: {
				summary: "Get all people",
				operationId: "getPeople",
				responses: {
					"200": {
						description: "Successful response",
						content: {
							"application/json": {
								schema: {
									$ref: "#/components/schemas/People",
								},
							},
						},
					},
				},
			},
		},
	},
	components: {
		schemas: {
			People: peopleSchema,
		},
	},
};

const outputPath = path.resolve(
	process.cwd(),
	"openapi.json"
);

fs.writeFileSync(
	outputPath,
	JSON.stringify(openApiDocument, null, 2),
	{ encoding: "utf-8" }
);

console.log(`OpenAPI spec written to ${outputPath}`);

