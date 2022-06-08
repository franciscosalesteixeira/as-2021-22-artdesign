// Import utilities
const morgan = require('morgan');
const express = require('express');

// Create app
var app = express();

// Middleware
app.set('view engine', 'ejs');

app 
    .use(express.static('views'))
    .use(morgan('dev'))
    .use(express.json())

// Listen to requests
app.listen(process.env.PORT || 5000)
console.log(`Listening on port 5000`)

// Routes
app.get('/', (req, res) => {

    res.render('index', { session: req.session });

});
