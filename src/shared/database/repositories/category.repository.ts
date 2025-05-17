import { desc } from "drizzle-orm";

import { type Category, categories } from "../schema";
import { initialCategories } from "../sql/initial-categories";
import { databaseRepository } from "./database.repository";

class CategoryRepository {
	DEFAULT_ORDER_BY = desc(categories.id);

	getAll = () => {
		return databaseRepository.db.query.categories.findMany({
			orderBy: this.DEFAULT_ORDER_BY
		});
	};

	// TODO: Make one time-query
	createInitial = async () => {
		console.log("[CategoryRepository] Create initial categories");

		try {
			await Promise.all(
				initialCategories.map(async (category) => {
					await databaseRepository.db.insert(categories).values({
						...category
					});
				})
			);
		} catch (e) {
			console.log(e);
		}
	};

	delete = async (id: Category["id"]) => {};
}

export const categoryRepository = new CategoryRepository();
