console.log(__dirname);
//console.log(module);
const path = require('path')
console.log(path.join(__dirname, 'myfile.txt'))

const os = require('os');
console.log(`Free Memory: ${os.freemem()}`)
console.log(`Total  Memory: ${os.totalmem()}`)

const fs = require('fs')
const files = fs.readdirSync('./') // sync -- bad!!!!
console.log(files)
