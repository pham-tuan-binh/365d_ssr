import { json } from '@sveltejs/kit';

import data from './quotes.json';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const day = Number(url.searchParams.get('day'));

	const quote = data.quotes[day - 1];

	return json(quote);
}
