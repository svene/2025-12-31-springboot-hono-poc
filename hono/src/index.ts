import { Hono } from 'hono'
import {app} from "./app/app";

const hono = new Hono()

app.init(hono);

// do not remove, otherwise app does not work:
export default hono
