export enum Ice {
	Crushed = 'Crushed',
	LargeCube = 'Large Cube',
	SmallCubes = 'Small Cubes',
	None = 'None',
	Hot = 'Hot'
}

export const iceLabels: Record<Ice, string> = {
	[Ice.Crushed]: 'over crushed ice',
	[Ice.LargeCube]: 'over a large cube',
	[Ice.SmallCubes]: 'over small cubes',
	[Ice.None]: 'up with no ice',
	[Ice.Hot]: 'hot'
};
