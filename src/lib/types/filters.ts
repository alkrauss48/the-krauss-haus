export type LogicMode = 'AND' | 'OR' | 'NOT AND' | 'NOT OR';

export interface FilterState {
	tags: string[];
	ingredients: string[];
	logicMode: LogicMode;
}
