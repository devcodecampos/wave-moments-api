import { DataSource } from "typeorm";

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_DATABASE,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DATABASE_HOST,
  port: 5432,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_DATABASE,
  entities: [],
  synchronize: true,
});

export async function startDatabase() {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error(error, "Error initializing database");
    throw error;
  }
}