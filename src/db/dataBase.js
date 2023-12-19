import { Sequelize } from 'sequelize';


const dbConfig = {
  host: "db4free.net" || "localhost",
  port: process.env.BD_PORT || "3306",
  username: "estefania12345" || 'root',
  password: "Aryastark12." || "",
  database: process.env.BD_NAME || "demeterfinal",
  dialect: 'mysql',
  define: {
    sql_mode: 'traditional',
  },
 
}

export const sequelize = new Sequelize(

  dbConfig,
);
