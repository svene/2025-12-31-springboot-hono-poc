import {Context} from "hono";

export type RouteDefinition = {
	url: (...args: any[]) => string;
	render: (c: Context) => Promise<Response>;
};
