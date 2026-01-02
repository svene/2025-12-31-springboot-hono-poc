export async function do_post(url: string, data: unknown) {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	// if (!res.ok) {
	// 	return c.text('POST failed', 500)
	// }

	return await res.text()
}
