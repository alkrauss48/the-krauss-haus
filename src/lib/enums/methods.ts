export enum CocktailMethod {
	Shaken = 'Shaken',
	Stirred = 'Stirred',
	Built = 'Built in Glass',
	Swizzled = 'Swizzled',
	FlashBlended = 'Flash Blended',
	Blended = 'Blended',
	Batched = 'Batched'
}

export const methodColors = {
	[CocktailMethod.Shaken]: '#fef3c7',
	[CocktailMethod.Stirred]: '#dbeafe',
	[CocktailMethod.Built]: '#dcfce7',
	[CocktailMethod.Swizzled]: '#ccfbf1',
	[CocktailMethod.FlashBlended]: '#fae8ff',
	[CocktailMethod.Blended]: '#fae8ff',
	[CocktailMethod.Batched]: '#fed7aa'
};

export const methodLabels: Record<CocktailMethod, string> = {
	[CocktailMethod.Shaken]: 'Shaken',
	[CocktailMethod.Stirred]: 'Stirred',
	[CocktailMethod.Built]: 'Built in glass',
	[CocktailMethod.Swizzled]: 'Swizzled',
	[CocktailMethod.FlashBlended]: 'Flash blended',
	[CocktailMethod.Blended]: 'Blended',
	[CocktailMethod.Batched]: 'Batched'
};
