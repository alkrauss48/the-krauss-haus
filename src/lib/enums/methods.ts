export enum CocktailMethod {
	Shaken = 'Shaken',
	Stirred = 'Stirred',
	Built = 'Built in Glass',
	FlashBlended = 'Flash Blended',
	Blended = 'Blended'
}

export const methodColors = {
	[CocktailMethod.Shaken]: '#fef3c7',
	[CocktailMethod.Stirred]: '#dbeafe',
	[CocktailMethod.Built]: '#dcfce7',
	[CocktailMethod.FlashBlended]: '#fae8ff',
	[CocktailMethod.Blended]: '#fae8ff'
};

export const methodLabels: Record<CocktailMethod, string> = {
	[CocktailMethod.Shaken]: 'Shaken',
	[CocktailMethod.Stirred]: 'Stirred',
	[CocktailMethod.Built]: 'Built in glass',
	[CocktailMethod.FlashBlended]: 'Flash blended',
	[CocktailMethod.Blended]: 'Blended'
};
