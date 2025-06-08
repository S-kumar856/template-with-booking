import mysql from 'mysql2/promise';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import contactRoutes from './routes/contactRoutes.js';


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Management System API');
});


app.use('/contact-details', contactRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// read the data
// const [rows] = await contactRoutes.execute(`
//     select * from ContactDetails;
//     `);
// console.log(rows);



