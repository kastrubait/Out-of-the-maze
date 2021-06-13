#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { pipeline } = require('stream');
const Solution = require('./src/transform-stream');
// const { es } = require('event-stream');

program
  .storeOptionsAsProperties(false)
  .option('-i, --input <string>', 'input file (if none then stdin is used)')
  .option('-o, --output <string>', 'output file (if none then stdout is used)')
  .parse(process.argv);

const init = async ({ input, output }) => {
  try {
    const inputPath = input ? path.join('./', input) : null;
    const outputPath = output ? path.join('./', output) : null;

    const myReadable = input
      ? fs.createReadStream(inputPath)
      : process.stdin;
    
    const myWriteble = output 
      ? fs.createWriteStream(outputPath, { flags: 'a' })
      : process.stdout;
    
    const transformer = new Solution();

    pipeline(myReadable, transformer, myWriteble, (err) => {
      if (err) {
        console.error(err.message);
        process.exit(1);
      }
    });

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

init(program.opts());