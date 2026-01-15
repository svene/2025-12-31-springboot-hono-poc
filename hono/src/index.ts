import { Hono } from 'hono'
import {app} from "./app/app";

const hono = new Hono()

app.init(hono);

export default hono
