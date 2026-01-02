import { Hono } from 'hono'
import {app} from "./app/app";
import {dev} from "./dev/dev";

const hono = new Hono()

app.init(hono);
dev.init(hono);

export default hono
