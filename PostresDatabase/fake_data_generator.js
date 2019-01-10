const faker = require('faker');
const path = require('path');
const fs = require('fs');
// const util = require('util');
// const csvWriter = require('csv-write-stream');

const numberOfEntries = 100000; 

let i = 1;
const stream = fs.createWriteStream('./write.csv', { flags: 'w' });

function writeData() {
  while (i <= numberOfEntries) {

    let data = {
      index: i,
      productName: faker.commerce.productName(),
      randomObj: {a:1},
    };
    if (!stream.write(JSON.stringify(data)+ ',')) {
      return;
    }
    i += 1;
  }
  stream.end();
}

stream.on('drain', () => {
  writeData();
});

writeData();
