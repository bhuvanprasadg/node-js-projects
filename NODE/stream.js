var fs = require('fs');

// var data = '';

// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8');

// readerStream.on('data',function(e){
//     data += e;
// });

// readerStream.on('end',function(){
//     console.log(data);
// });

// readerStream.on('error',function(err){
//     console.log(err.stack);
// });

// console.log('Read Completed..!');




// var data = 'Writing in file';

// var writerStream = fs.createWriteStream('output.txt', {
//     flag: 'a+',
//     encoding: 'UTF-8',
//     start: 5,
//     end: 64,
//     highWaterMark: 16
// });

// writerStream.write(data,'UTF8');

// writerStream.end();

// writerStream.on('finish', function() {
//     console.log("Write completed..!");
// });

// console.log("Program Ended..!");





// var readerStream = fs.createReadStream('input.txt');

// var writerStream = fs.createWriteStream('output.txt');

// readerStream.pipe(writerStream);

// console.log('Piping of Streams..!');




var zlib = require('zlib');

// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

// console.log('Input File Compressed..!');



fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));

console.log('Input Zip File Decompressed..!');