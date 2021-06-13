const { MAZE } = require('./input');


const checkPath = (start) => {

  let solution = [];
  let current = start;
  let siblings =  getValidSib(current).filter((crd) => crd.val !== '*');

  console.log(' start ->', siblings, solution);
  while (min(siblings).val !== 1) {
    const next = min(siblings);
    
    const dx = current.x - next.x;
    const dy = current.y - next.y;

    solution.push(getRoute({ dx, dy }));

    MAZE[current.y][current.x] = '*';
    current = next;
    siblings =  getValidSib(current).filter((crd) => crd.val !== '*');
  }
  const dx = current.x - siblings[0].x;
  const dy = current.y - siblings[0].y;
  solution.push(getRoute({ dx, dy }));
  return solution;
}

const prepareMaze = (end) => {
  
  MAZE[end.y][end.x] = end.step + 1;
  let siblings =  getValidSib(end).filter((crd) => crd.val === '+');

  while (siblings.length > 0) {
    const current = siblings[0];
    
    if (current.val === 0) { break } 

    siblings.shift();
    MAZE[current.y][current.x] = current.step + 1;
    const newSiblings =  getValidSib(current).filter((crd) => crd.val === '+');
    siblings = siblings.concat(newSiblings);
  }
}


function getValidSib(cord) {

  const { x, y, step } = cord;
  let cords = [];

  if (MAZE[y - 1] !== undefined) {
    cords.push({ x: x, y: y - 1, val: MAZE[y - 1][x], step: step + 1 });
  }
  if (MAZE[y + 1] !== undefined) {
    cords.push({ x: x, y: y + 1, val: MAZE[y + 1][x], step: step + 1});
  }
  if (MAZE[y][x - 1] !== undefined) {
    cords.push({ x: x - 1, y: y, val: MAZE[y][x - 1], step: step + 1 });
  }
  if (MAZE[y][x + 1] !== undefined) {
    cords.push({ x: x + 1, y: y, val: MAZE[y][x + 1], step: step + 1 });
  }
  return cords.filter((crd) => crd.val !== '#');
}

function min(siblings) {

  let minValue = siblings[0];

  for (let i = 1; i < siblings.length; i++) {
    if (minValue.val > siblings[i].val) {
      minValue = siblings[i];
    }
  }

  return minValue;
}

function getRoute(step) {

  const { dx, dy } = step;

  if (dx === 0 && dy === -1) { return 'down' }
  if (dx === 0 && dy === 1) { return 'up' }
  if (dx === -1 && dy === 0) { return 'right' }
  if (dx === 1 && dy === 0) { return 'left' }

} 

module.exports = {
  checkPath, prepareMaze
}