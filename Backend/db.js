
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'hotel_data',
});

// await db.execute(` alter table ContactDetails modify phone varchar(15); `);
// await db.execute(` alter table ContactDetails drop column subject; `);

console.log('Connected to MySQL');
export default db;
