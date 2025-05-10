import { Transaction } from "./transaction";

export interface Category {
	id: string;
	name: string;
	config: {
		icon: string;
		highlight: string;
	};
	transactions: Transaction[];
}
