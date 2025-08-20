import type { Recipe } from '$lib/types/recipes';
import { Tags } from '$lib/data/all-tags';

const TOM_AND_JERRY_BATTER: Recipe = {
	name: 'Tom & Jerry Batter',
	slug: 'tom-and-jerry-batter',
	description: 'A batter made with egg and sugar for a rich, creamy flavor',
	ingredients: ['6 eggs', '1lb powdered sugar'],
	instructions:
		'Separate eggs. Beat egg yolks, gradually adding sugar, until thick & creamy. Beat egg whites and until stiff peaks form. Combine yolks and beat until light and creamy.',
	notes:
		"Used in the Tom & Jerry. Created by Jack Krauss, Aaron's grandfather, who passed in 2011. You can freeze the batter and scoop it straight from the freezer.",
	tag: Tags.Syrups.TOM_AND_JERRY_BATTER
};

export default TOM_AND_JERRY_BATTER;
