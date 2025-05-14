import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import * as schema from "./schema";


export const DATABASE_NAME = "rethink.finances-1.0.0";

export const sqliteDatabase = openDatabaseSync(DATABASE_NAME);

export const databaseStudio = sqliteDatabase;
export const database = drizzle(sqliteDatabase, {schema});