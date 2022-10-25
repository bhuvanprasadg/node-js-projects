const { Buffer } = require('buffer');

// const buff1 = Buffer.alloc(15,'utf8');
// buff1.write('HI HOW ARE you');
// const buff2 = Buffer.from('Who are you');
// console.log(buff1);
// console.log(buff2);
// console.log(buff1.subarray(0,4).toString());
// console.log(buff1.toJSON());

// var buf = new Buffer.alloc(10);
// var buf = new Buffer.from([10,20,30,40,50]);
// var buf2 = new Buffer.from('Simple Node Learning','utf8');
// console.log(buf2);

// var buff = new Buffer.alloc(6);
// buff.write('banana');
// console.log(buff.toString('utf8',0,5));

var buff = new Buffer.from('Simple Node Learning ');
// var json = buff.toJSON();
var buff2 = new Buffer.from('Zs it?');
// var buff3 = Buffer.concat([buff,buff2]);
// var buff3 = buff.compare(buff2);
// var buff3 = new Buffer.alloc(20);
// buff.copy(buff3);
// var buff3 = buff.slice(0,8);
var buff3 = buff.length;
console.log(buff3.toString());
