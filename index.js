#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const { load } = require('./src/loadMaze');
const { startMaze, outputMaze } = require('./src/getStartEnd');
const { prepareMaze, checkPath } = require('./src/checkPath');

program
  .storeOptionsAsProperties(false)
  .option('-i, --input <string>', 'input file (if none then stdin is used)')
  .option('-o, --output <string>', 'output file (if none then stdout is used)')
  .parse(process.argv);

(async function () {
  try {

    const { input, output } = program.opts();
    const MAZE = await load(input);

    const start = startMaze(MAZE);
    const end = outputMaze(MAZE);

    end.step = 0;
    prepareMaze(MAZE, end);
    const pathOutMaze = checkPath(MAZE, start);

    const outputPath = output ? path.join('./', output) : null;

    const myWriteble = output 
      ? fs.createWriteStream(outputPath)
      : process.stdout;

    pathOutMaze.map(el => {
      myWriteble.write(el);
      myWriteble.write(' ');
    });

  } catch (e) {
    console.error(e);
  }
})()