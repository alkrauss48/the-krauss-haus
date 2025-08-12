import type { PageLoad } from './$types';

export interface Party {
	slug: string;
	name: string;
	description: string;
	date: Date;
}

const parties: Party[] = [
	{
		slug: 'tiki-party-2025',
		name: 'Tiki Party',
		description: "Celebrating Aaron's 35th in style with tropical cocktails and good vibes",
		date: new Date(2025, 7, 9) // August 9, 2025 (month is 0-indexed, so 7 = August)
	}
];

export const load: PageLoad = () => {
	// Sort parties by date in descending order (newest first)
	const sortedParties = [...parties].sort((a, b) => b.date.getTime() - a.date.getTime());

	return {
		parties: sortedParties
	};
};
