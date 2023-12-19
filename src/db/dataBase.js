import { Sequelize } from 'sequelize';


const dbConfig = {
  host: "db4free.net" || "localhost",
  port:  "3306",
  username: "estefania12345" || 'root',
  password: "Aryastark12." || "",
  database: "demeterfinal",
  dialect: 'mysql',
  define: {
    sql_mode: 'traditional',
  },
 
}

export const sequelize = new Sequelize(

  dbConfig,
);
