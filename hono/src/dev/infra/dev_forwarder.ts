export async function callPostEndpoint(url: string, vm: unknown): Promise<string> {
	if (process.env.NODE_ENV !== 'development') {
		throw new Error('postForHtml() must only be used in development')
	}

	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(vm),
	})

	if (!res.ok) {
		const text = await res.text()
		throw new Error(`POST ${url} failed (${res.status}): ${text}`)
	}

	return res.text()
}
