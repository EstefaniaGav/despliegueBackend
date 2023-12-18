import { Sequelize } from 'sequelize';

const dbConfig = {
  host: process.env.BD_HOST || "localhost",
  port: process.env.BD_PORT || "3306",
  username: process.env.BD_USER || 'root',
  password: process.env.BD_PASSWORD || "",
  database: process.env.BD_NAME || "demeterfinal",
  dialect: 'mysql'

}

export const sequelize = new Sequelize({
  ...dbConfig,
  dialectOptions: {
    options: {
      sql_mode: "STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
    }
  }
});