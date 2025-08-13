export interface TagCategory {
	label: string;
	color: string;
}

export interface Tag {
	label: string;
	order: number;
	category: TagCategory;
}
