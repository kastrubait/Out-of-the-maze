#!/usr/bin/env node

// const fs = require('fs');
const path = require('path');
const { program } = require('commander');
// const { pipeline } = require('stream');
// const Solution = require('./src/transform-stream');
// const { es } = require('event-stream');

const { startMaze, outputMaze } = require('./src/getStartEnd');
const { MAZE } = require('./src/input');
const { prepareMaze, checkPath } = require('./src/checkPath');

program
  .storeOptionsAsProperties(false)
  .option('-i, --input <string>', 'input file (if none then stdin is used)')
  .option('-o, --output <string>', 'output file (if none then stdout is used)')
  .parse(process.argv);

const init = async ({ input, output }) => {
  try {
    const inputPath = input ? path.join('./', input) : null;
    const outputPath = output ? path.join('./', output) : null;

    console.log(inputPath, outputPath);

    // const myReadable = input
    //   ? fs.createReadStream(inputPath)
    //   : process.stdin;
    
    // const myWriteble = output 
    //   ? fs.createWriteStream(outputPath, { flags: 'a' })
    //   : process.stdout;
    
    // const transformer = new Solution();

    // pipeline(myReadable, transformer, myWriteble, (err) => {
    //   if (err) {
    //     console.error(err.message);
    //     process.exit(1);
    //   }
    // });

    const start = startMaze(MAZE);
    const end = outputMaze(MAZE);

    end.step = 0;
    prepareMaze(end);
    checkPath(start);

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

init(program.opts());