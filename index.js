const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn)

const textOut = `This is waht we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File has been Written');
