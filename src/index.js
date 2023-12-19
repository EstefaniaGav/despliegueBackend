import app from './app.js'
import { sequelize } from './db/dataBase.js'

const PORT = process.env?.MYSQLPORT || 5080
const HOST = process.env?.MYSQLHOST || "127.0.0.1"
async function main() {
    try{
        await sequelize.sync({force: false})
        app.listen(PORT, HOST);
        console.log('Server on port ', PORT);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();