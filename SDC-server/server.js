const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// const productsRouter = require('../routes/products.routes.js');
const reviewsRouter = require('./routes/reviews.routes.js');

const app = express();
const PORT = 3001;

// Static files
app.use(express.static(path.join(__dirname, '/../public')));

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

// Mongo Routes
// app.use('/products', productsRouter);
// app.use('/products', reviewsRouter);
// app.use((req, res) => {
//   res.status(404).send('Not found');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// module.exports = app;
// app.use((req, res) => {
//   res.status(404).send('Not found');
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
