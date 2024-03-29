const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 5000;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "zithara",
  password: "Abhi123"
});
client.connect();
app.use(cors());

app.get('/api/employee', async (req, res) => {
  try {
    const { page = 1, limit = 20, sortBy = 'date', search = '' } = req.query;
    const offset = (page - 1) * limit;
    const query = `
      SELECT sno, customer_name, age, phone, location,
      created_at, created_at_time
      FROM employee
      WHERE LOWER(customer_name) LIKE LOWER('%${search}%')
      OR LOWER(location) LIKE LOWER('%${search}%')
      ORDER BY ${sortBy === 'created_at' ? 'created_at' : 'created_at_time'} ASC
      LIMIT ${limit} OFFSET ${offset}
    `;
    const { rows } = await client.query(query);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
