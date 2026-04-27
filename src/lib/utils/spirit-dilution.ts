export const ML_PER_FL_OZ = 29.575;

const DENSITY_TABLE: ReadonlyArray<readonly [number, number]> = [
	[40, 0.948],
	[70, 0.867],
	[95, 0.811],
	[100, 0.789]
];

export function densityForABV(abv: number): number {
	if (abv <= DENSITY_TABLE[0][0]) return DENSITY_TABLE[0][1];
	if (abv >= DENSITY_TABLE[DENSITY_TABLE.length - 1][0])
		return DENSITY_TABLE[DENSITY_TABLE.length - 1][1];
	for (let i = 0; i < DENSITY_TABLE.length - 1; i++) {
		const [a1, d1] = DENSITY_TABLE[i];
		const [a2, d2] = DENSITY_TABLE[i + 1];
		if (abv >= a1 && abv <= a2) {
			return d1 + ((abv - a1) / (a2 - a1)) * (d2 - d1);
		}
	}
	return DENSITY_TABLE[DENSITY_TABLE.length - 1][1];
}

export type Unit = 'mL' | 'fl oz';

export interface DilutionResult {
	sourceVolume: number;
	waterVolume: number;
	sourceWeight: number;
	waterWeight: number;
}

export function calculateDilution(args: {
	targetABV: number;
	sourceABV: number;
	finalVolume: number;
	unit: Unit;
}): DilutionResult {
	const finalMl = args.unit === 'fl oz' ? args.finalVolume * ML_PER_FL_OZ : args.finalVolume;
	const sourceMl = finalMl * (args.targetABV / args.sourceABV);
	const waterMl = finalMl - sourceMl;
	const density = densityForABV(args.sourceABV);
	const toUnit = (ml: number) => (args.unit === 'fl oz' ? ml / ML_PER_FL_OZ : ml);
	return {
		sourceVolume: toUnit(sourceMl),
		waterVolume: toUnit(waterMl),
		sourceWeight: sourceMl * density,
		waterWeight: waterMl
	};
}
