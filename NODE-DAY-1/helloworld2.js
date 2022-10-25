var anotherFile = require('./helloworld');

var buff = anotherFile.buff;

var buff2 = Buffer.alloc(50);

buff.copy(buff2);

console.log(`From helloworld2 = ${buff2.toString()}`);