var { Buffer } = require('buffer');

var buff = Buffer.alloc(50);

buff = Buffer.from('helloworld');

// var buff2 = Buffer.alloc(50);

// buff.copy(buff2);

console.log(`From helloworld1 = ${buff.toString()}`);

// console.log(buff2.toString());

exports.buff = buff;