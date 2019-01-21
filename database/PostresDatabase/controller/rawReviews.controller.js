const { Pool, Client } = require('pg');
const Promise = require('bluebird');

const psqlConfig = {
  host: process.env.DB_HOST || 'localhost',
  database: 'sdc',
  port: 5432,
};

const pool = new Pool(psqlConfig);

pool.connect()
  .then((client) => {
    console.log('connected to Postgres!@!@!!!!@@@!');
  })
  .catch((err) => {
    console.log(err);
  });

const createReview = (req, res) => {

};

const readAllReviewsByProduct = (req, res) => {
  const { product_id } = req.params.product_id;
  pool.query(`SELECT * FROM reviews WHERE product_id = ${Number(req.params.product_id)}`, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
};

const readReviewByID = (req, res) => {
  pool.query(`SELECT * FROM reviews WHERE id = ${Number(req.params.reviewID)}`, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
};

// const getReviews = (itemID) => {
//   return new Promise((resolve, reject) => {
//     pool.query(`SELECT * FROM reviews WHERE product_id = ${itemID}`, (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// };

const updateReview = (req, res) => {

};

const destroyReview = (req, res) => {

};

module.exports = {
  createReview,
  readReviewByID,
  readAllReviewsByProduct,
  updateReview,
  destroyReview,
};
