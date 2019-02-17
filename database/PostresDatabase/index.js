const { Pool, Client } = require('pg');
const Promise = require('bluebird');

const client = new Client({
  user: 'alexminer',
  host: 'localhost',
  database: 'sdc',
  password: '',
  port: 5432,
});


client.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected!');
  }
});

const addItem = (item) => {
  return new Promise((resolve, reject) => {
    client.query(`INSERT INTO products(productName) VALUES(${item})`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
// const values = ['brianc', 'brian.m.carlson@gmail.com']
const addReview = (review) => {
  // review needs to be an array with the order defined as such
  return new Promise((resolve, reject) => {
    const text = 'INSERT INTO reviews(username, is_verified, review_text, score, found_helpful, title, review_date, product_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    client.query(text, review, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const getReviews = (itemID) => {
  return new Promise((resolve, reject) => {
    client.query(`SELECT * FROM reviews WHERE product_id = ${itemID}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const updateReview = (itemID, review) => {
  return new Promise((resolve, reject) => {
    const text = `UPDATE reviews SET username=$1, is_verified=$2, review_text=$3, score=$4, found_helpful=$5, title=$6, review_date=$7 WHERE product_id = ${itemID}`;
    client.query(text, review, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const deleteReview = (reviewID) => {
  return new Promise((resolve, reject) => {
    client.query(`DELETE FROM reviews WHERE reviews.id = ${reviewID}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

addItem('testItem');

module.exports = {
  addItem,
  addReview,
  getReviews,
  updateReview,
  deleteReview,
};
