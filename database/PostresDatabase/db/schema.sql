DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;
\connect sdc;

-- CREATE TABLE products (
--   id SERIAL UNIQUE PRIMARY KEY,
--   productName VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE reviews (
--   review_id SERIAL UNIQUE PRIMARY KEY,
--   username VARCHAR(50) NOT NULL,
--   is_verified BOOLEAN NOT NULL,
--   review_text TEXT NOT NULL,
--   score INT NOT NULL,
--   found_helpful INT NOT NULL,
--   title VARCHAR(500),
--   review_date DATE,
--   product_id INT NOT NULL REFERENCES products(id)
--   FOREIGN KEY (product_id) REFERENCES products(id)
-- );
