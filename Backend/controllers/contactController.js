import db from '../db.js'; // Adjust the import path as necessary


export const getContactDetails = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM ContactDetails');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching contact details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const saveContactDetails = async (req, res) => {
    const { first_name, last_name, email, phone, message } = req.body;

    try {
        const sql = `
            INSERT INTO ContactDetails (first_name, last_name, email, phone, message)
            VALUES (?, ?, ?, ?, ?)
        `;
        await db.execute(sql, [first_name, last_name, email, phone, message]);
        res.status(201).json({ message: 'Contact details saved successfully' });
    } catch (err) {
        console.error('Error saving contact details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};