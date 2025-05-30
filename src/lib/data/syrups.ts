export interface Syrup {
	name: string;
	description?: string;
	// Future fields for recipes
	// ingredients?: string[];
	// instructions?: string[];
	// notes?: string;
}

export const syrups: Syrup[] = [
	{
		name: 'Rich Simple Syrup',
		description: 'A 2:1 ratio of sugar to water, creating a more concentrated sweetness'
	},
	{
		name: 'Demerara Syrup',
		description: 'Made with demerara sugar for a rich, molasses-like sweetness'
	},
	{
		name: 'Grenadine',
		description: 'A pomegranate-based syrup with a deep red color and tart sweetness'
	},
	{
		name: 'Cinnamon Syrup',
		description: 'Infused with cinnamon for a warm, spicy sweetness'
	},
	{
		name: 'Honey Syrup',
		description: 'A blend of honey and water for a floral sweetness'
	},
	{
		name: 'Honey-Ginger Syrup',
		description: 'Honey syrup infused with fresh ginger for a spicy kick'
	},
	{
		name: 'Falernum',
		description: 'A spiced syrup with notes of ginger, clove, and lime'
	},
	{
		name: 'Fassionola',
		description: 'A tropical fruit syrup with a complex blend of flavors'
	},
	{
		name: 'Passionfruit Syrup',
		description: 'Made from passionfruit for a tart, tropical sweetness'
	},
	{
		name: 'Orgeat',
		description: 'An almond-based syrup with notes of orange flower water'
	},
	{
		name: 'Caramel Syrup',
		description: 'A rich, buttery syrup with deep caramel notes'
	}
];
