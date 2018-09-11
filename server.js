const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/Items');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config using MLab URI 
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true } )
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/Items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
