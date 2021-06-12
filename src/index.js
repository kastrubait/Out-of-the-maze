const path = require('path');
const { program } = require('commander');

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

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

init(program.opts());