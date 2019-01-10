DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

use sdc;

-- CREATE SCHEMA reviews;

-- /connect reviews
-- DROP SCHEMA reviews CASCADE;

CREATE TABLE products (
  id SERIAL UNIQUE PRIMARY KEY,
  productName VARCHAR(50) NOT NULL
);

CREATE TABLE reviews (
  review_id INT CONSTRAINT PRIMARY,
  username VARCHAR(25) NOT NULL,
  is_verified BOOLEAN NOT NULL,
  review_text TEXT NOT NULL,
  score INT NOT NULL,
  found_helpful INT NOT NULL,
  title VARCHAR(50),
  review_date DATE,
  product_id INT NOT NULL REFERENCES products(id),
  PRIMARY KEY (review_id)
);


-- CREATE TABLE products (
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );

-- CREATE TABLE reviews (
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- 	product_id INT NOT NULL,
-- 	username VARCHAR(25),
-- 	is_verified INT NOT NULL,
-- 	review_text TEXT,
-- 	score INT NOT NULL,
-- 	found_helpful INT,
-- 	title VARCHAR (50),
-- 	review_date DATE,
-- 	FOREIGN KEY (product_id) REFERENCES products(id)
-- );

