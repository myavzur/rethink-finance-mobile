import { type Category } from "../schemas";
import { databaseRepository } from "./database.repository";

class CategoryRepository {
	getAll = () => {
		return databaseRepository.db.query.categories.findMany();
	};

	delete = async (id: Category["id"]) => {};
}

export const categoryRepository = new CategoryRepository();
