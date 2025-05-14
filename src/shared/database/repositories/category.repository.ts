import { eq } from "drizzle-orm";
import { categories, type Category } from "../schemas";
import { databaseRepository } from "./database.repository";

class CategoryRepository {
  getAll = async () => {
    return await databaseRepository.db.query.categories.findMany();
  };

  delete = async (id: Category["id"]) => {
		const condition = eq(categories.id, id);

    return await databaseRepository.db
      .delete(categories)
      .where(condition);
  };
}

export const categoryRepository = new CategoryRepository();
