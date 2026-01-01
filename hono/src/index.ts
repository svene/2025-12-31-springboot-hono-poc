import { Hono } from 'hono'
import {mainpage} from "./mainpage";

const app = new Hono()

mainpage.init(app);

export default app
