export enum CocktailMethod {
	Shaken = 'Shaken',
	Stirred = 'Stirred',
	Built = 'Built',
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
