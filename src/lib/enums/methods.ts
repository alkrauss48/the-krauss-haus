export enum CocktailMethod {
	Shaken = 'shaken',
	Stirred = 'stirred',
	Built = 'built',
	FlashBlended = 'flash blended'
}

export const methodColors = {
	[CocktailMethod.Shaken]: '#fef3c7',
	[CocktailMethod.Stirred]: '#dbeafe',
	[CocktailMethod.Built]: '#dcfce7',
	[CocktailMethod.FlashBlended]: '#fae8ff'
};
