export enum ServedIn {
	CoupeGlass = 'Coupe Glass',
	DoubleRocksGlass = 'Double Rocks Glass',
	SingleRocksGlass = 'Single Rocks Glass',
	NickAndNoraGlass = 'Nick & Nora Glass',
	HighballGlass = 'Highball Glass',
	FluteGlass = 'Flute Glass',
	TikiMug = 'Tiki Mug',
	PintGlass = 'Pint Glass',
	Mug = 'Mug',
	JulepTin = 'Julep Tin'
}

export const servedInLabels: Record<ServedIn, string> = {
	[ServedIn.CoupeGlass]: 'a coupe glass',
	[ServedIn.DoubleRocksGlass]: 'a double rocks glass',
	[ServedIn.SingleRocksGlass]: 'a single rocks glass',
	[ServedIn.NickAndNoraGlass]: 'a Nick & Nora glass',
	[ServedIn.HighballGlass]: 'a highball glass',
	[ServedIn.FluteGlass]: 'a flute glass',
	[ServedIn.TikiMug]: 'a tiki mug',
	[ServedIn.PintGlass]: 'a pint glass',
	[ServedIn.Mug]: 'a mug',
	[ServedIn.JulepTin]: 'a julep tin'
};
