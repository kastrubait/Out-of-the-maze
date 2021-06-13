const startValue = 0;
const endValue = '+';

const startMaze = (MAZE) => {
  for(let i = 0; i < MAZE.length; i++) {
    if (MAZE[i].indexOf(startValue) !== -1 ) {
      startMaze.y = i;
      startMaze.x = MAZE[i].indexOf(startValue);
    }
  }
  return startMaze;
};

const outputMaze = (MAZE) => {
  if (MAZE[0].indexOf(endValue) !== -1 ) {
    outputMaze.y = 0;
    outputMaze.x = MAZE[0].indexOf(endValue);
  }
  if (MAZE[MAZE.length-1].indexOf(endValue) !== -1 ) {
    outputMaze.y =MAZE.length;
    outputMaze.x = MAZE[MAZE.length-1].indexOf(endValue);
  }
  for (let i = 0; i < MAZE.length; i++) {
    if (MAZE[i][0].indexOf(endValue) !== -1) {
      outputMaze.y = i;
      outputMaze.x = 0;
    }
    if (MAZE[i][MAZE[0].length-1].indexOf(endValue) !== -1) {
      outputMaze.y = i;
      outputMaze.x = MAZE[0].length;
    }
  }
  return outputMaze;
}

module.exports = { startMaze, outputMaze };