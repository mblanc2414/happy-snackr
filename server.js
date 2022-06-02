// Dependencies 
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const snacksController = require('./controllers/snacks.js');
const app = express();


// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/snacks', snacksController);

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));






app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Listener///
app.listen(3000, () => {
    console.log('listening....');
});


