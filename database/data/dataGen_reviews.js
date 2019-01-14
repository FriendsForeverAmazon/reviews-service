const faker = require('faker');
const path = require('path');
const fs = require('fs');
const util = require('util');

const numberOfEntries = 10000000;
const numOfReviews = 5 * numberOfEntries;
let i = 1;

const productStream = fs.createWriteStream('./review.tsv', { flags: 'w' });

let percentComplete = 0;
console.time('Runtime');

function writeData() {
  while (i <= numOfReviews) {
    let username = faker.name.findName();
    let is_verified = (Math.random() > 0.1).toString();
    let review_text = faker.lorem.sentences();
    let score = faker.random.number({ min: 1, max: 5 }).toString();
    let found_helpful = Math.floor(Math.random() * 100).toString();
    let title = faker.lorem.sentence();
    let review_date = faker.date.between('2010-01-01', '2019-01-19').toISOString().split('Z')[0];
    let product_id = faker.random.number({ min: 1, max: numberOfEntries }).toString();

    let reviewStr = username + '\t' + is_verified + '\t' + review_text + '\t' + score + '\t' + found_helpful + '\t' + title + '\t' + review_date + '\t' + product_id;

    if (i % (numOfReviews / 20) === 0 && i !== 0) {
      percentComplete += 5;
      const loadingMsg = `Writing to file...[${percentComplete}% complete]`;
      console.log(loadingMsg);
    }
    i += 1;

    if (!productStream.write(reviewStr + '\tNOW()\tNOW()\n')) {
      return;
    }
  }
  productStream.end();
}

productStream.on('finish', () => {
  console.log('Done Writing!');
  console.timeEnd('Runtime');
});

productStream.on('drain', () => {
  writeData();
});

writeData();
