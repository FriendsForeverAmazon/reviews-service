require('newrelic');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const reviewsRouter = require('./routes/reviews.routes.js');

const app = express();
const PORT = 3001;

// Static files
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/:productid', express.static(path.join(__dirname, '/../public')));


// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
// app.use('products', productsRouter);
app.use('/reviews', reviewsRouter);
app.use((req, res) => {
  res.status(404).send('Not Found!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
