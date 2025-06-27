export interface SectionColor {
	primary: string;
	secondary: string;
	tertiary: string;
	variationText: string;
}

export interface SectionColors {
	featured: SectionColor;
	mommy: SectionColor;
	daddy: SectionColor;
	cyrus: SectionColor;
	lucas: SectionColor;
}

export const sectionColors: SectionColors = {
	featured: {
		primary: '#fecaca',
		secondary: '#fef3c7',
		tertiary: '#dbeafe',
		variationText: '#7c2d12'
	},
	mommy: {
		primary: '#fae8ff',
		secondary: '#fce7f3',
		tertiary: '#fdf2f8',
		variationText: '#581c87'
	},
	daddy: {
		primary: '#dbeafe',
		secondary: '#e0e7ff',
		tertiary: '#ede9fe',
		variationText: '#1e40af'
	},
	cyrus: {
		primary: '#dcfce7',
		secondary: '#f0fdf4',
		tertiary: '#ecfdf5',
		variationText: '#166534'
	},
	lucas: {
		primary: '#fff7ed',
		secondary: '#ffedd5',
		tertiary: '#fef3c7',
		variationText: '#9a3412'
	}
};
