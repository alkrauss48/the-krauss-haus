export interface SectionColor {
	primary: string;
	secondary: string;
	tertiary: string;
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
		tertiary: '#dbeafe'
	},
	mommy: {
		primary: '#fae8ff',
		secondary: '#fce7f3',
		tertiary: '#fdf2f8'
	},
	daddy: {
		primary: '#dbeafe',
		secondary: '#e0e7ff',
		tertiary: '#ede9fe'
	},
	cyrus: {
		primary: '#dcfce7',
		secondary: '#f0fdf4',
		tertiary: '#ecfdf5'
	},
	lucas: {
		primary: '#fff7ed',
		secondary: '#ffedd5',
		tertiary: '#fef3c7'
	}
};
