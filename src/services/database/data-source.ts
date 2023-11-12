import { DataSource } from "typeorm";

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DATABASE_HOST,
  port: 5432,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/src/modules/**/*.entity.js"
      : "src/modules/**/*.entity.ts",
  ],
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
