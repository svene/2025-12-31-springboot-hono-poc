import { Hono } from 'hono'
import { html } from "hono/html"

const app = new Hono()

app.get('/', (c) => {
	return c.text('Hello Hono!')
})

app.get('/hello', (c) => {
	return c.html(
		html`<!doctype html>
      <h1>Hello from Hono!</h1>`
	)
})


export default app
