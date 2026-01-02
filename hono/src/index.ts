import { Hono } from 'hono'
import {app} from "./app";

const hono = new Hono()

app.init(hono);

export default hono
