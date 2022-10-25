var fs = require('fs');

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// fs.readFile('input.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// });

// console.log('Opening a file.!');
// fs.open('input.txt','r',function(err,data){
//     if (err){
//         return console.error(err);
//     }
//     console.log('File opened Successfully..!');
// });

// console.log('Checking the stats of a file.!');
// fs.stat('input.txt',function(err,stats){
//     if (err){
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log('File opened Successfully..!');

//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
// });


// fs.writeFile('output.txt','Simple Node Learning',function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log('Data Written Successfully..!');

//     fs.readFile('output.txt',function(err,data){
//         console.log(data.toString());
//     });
// });

var buf = new Buffer.alloc(15);


