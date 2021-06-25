const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function load(input) {
  
  return new Promise((resolve, reject) => {

    const inputPath = input ? path.join('./', input) : null;
      
    const myReadable = input
      ? fs.createReadStream(inputPath)
      : process.stdin;

    let arrayData = [];
    let rl = readline.createInterface({
      input: myReadable,
      terminal: false
    });
    rl.on('line',  function(chunk){
      const temp = chunk.split(' ');
      arrayData.push(temp); 
    }).on('close', () =>{
      resolve(arrayData);
    }).on('error', err => {
      reject(err);
    })
  });
}

module.exports = {
  load
}