const express = require('express');
const bodyParser = require('body-parser');
const mysql = require(mysql);

const app = express();
app.use(bodyParser.json());

//Creating the database connection
const connection = mysql.createConnection({
    host: 'root',
    user: 'username',
    password: 'password',
    database: 'coaching_business'
});

connection.connect(err => {
    if (err) {
        console.error('Error in connection', err);
        return;
    }
    console.log('Successfully connected');
    });

app.post('/signup', (req, res) => {
    const {username, password} = req.body;
    const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
    const values = [username, password];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error with username', error);
            res.status(500).send('Error saving user');
        }
        else {
            res.status(200).send('Sign up successful');
        }
    });
});

const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});