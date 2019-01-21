const faker = require('faker');
const path = require('path');
const fs = require('fs');
const util = require('util');

const numberOfEntries = 1e7;
const numOfReviews = 5 * numberOfEntries;
let i = 1;

const productStream = fs.createWriteStream('./product1.tsv', { flags: 'w' });

let percentComplete = 0;
console.time('Runtime');

function writeData() {
  while (i <= numberOfEntries) {
    let id = i;
    let prodName = faker.commerce.productName();

    if (i % (numberOfEntries / 20) === 0 && i !== 0) {
      percentComplete += 5;
      const loadingMsg = `Writing to file...[${percentComplete}% complete]`;
      console.log(loadingMsg);
    }
    i += 1;
    
    if (!productStream.write(id + '\t' + prodName + '\tNOW()\tNOW()\n')) {
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
