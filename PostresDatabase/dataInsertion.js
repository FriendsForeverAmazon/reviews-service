const fs = require('fs');
const async = require('async');
const csv = require('csv');

// let input = fs.createReadStream('./write.csv', {endcoding: 'utf8'});

// let parser = csv.parse({
//   columns: true,
//   relax: true,
// });

// let inserter = async.cargo()

// var inserter = async.cargo(function(tasks, inserterCallback) {
//   model.bulkCreate(tasks).then(function() {
//       inserterCallback();
//     }
//   );
// },
// 1000
// );

// parser.on('readable', function () {
// while(line = parser.read()) {
//   inserter.push(line);
// }
// });

// parser.on('end', function (count) {
// inserter.drain = function() {
//   doneLoadingCallback();
// }
// });

// input.pipe(parser);


Controller.uploadCsv = async(data) => {
    fs.createReadStream('./write.csv')
        .pipe(csvParser({
            delimiter: ',', 
            endLine: '\n', 
            escapeChar: '"', 
            enclosedChar: '"'
        }))
        .on('data', function(data) {
             console.log(data)// returning in console mentioned below
             console.log(data.name) // is undefined 

             const add = {
                name: data.name,
                address: data.address,
                phoneNo: data.phoneNumber,
                email: data.email,
                created_at: new Date(),
                updated_at: new Date()
            };
            const result = await models.table.create(add);
        })
        .on('end', function(data) {
             console.log('reading finished')
        })
}