function generateMaze (columnsNumber, rowsNumber) {
  const map = [];

  for (let y = 0; y < rowsNumber; y++) {
    const row = [];
    for (let x = 0; x < columnsNumber; x++) {
      row.push('#');
    }
    map.push(row);
  }

  function isEven (n) {
    return n % 2 === 0;
  }
  
  function getRandomFrom (array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  const startX = getRandomFrom(Array(columnsNumber).fill(0).map((item, index) => index).filter(x => isEven(x)));
  const startY = getRandomFrom(Array(rowsNumber).fill(0).map((item, index) => index).filter(x => isEven(x)));

  let tractor = {};
  tractor.x = startX;
  tractor.y = startY;

  function setField (x, y, value) {
    if (x <= 0 || x >= columnsNumber || y <= 0 || y >= rowsNumber) {
      return null;
    }
    map[y][x] = value;
  }

  setField(startX, startY, ' ');

  function isMaze () {
    for (let x = 0; x < columnsNumber; x++) {
      for (let y = 0; y < rowsNumber; y++) {
        if (isEven(x) && isEven(y) && getField(x, y) === '#') {
          return false;
        }
      }
    }

    let s,d = '';
    for (let i = 0; i < columnsNumber; i++) {
      d = d + '#';
    }
    console.log('#' + d + '#');
    for (let i = 0; i < rowsNumber; i++) {
      s = '';
      for (let j = 0; j < columnsNumber; j++) {
        s = s + map[i][j];
      }
      console.log('#' + s + '#');
    }
    console.log('#' + d + '#');
    return true;
  }

  while (!isMaze()) {
    moveTractor();
  }

  return map;

  function getField (x, y) {
    if (x <= 0 || x >= columnsNumber || y <= 0 || y >= rowsNumber) {
      return null;
    }
    return map[y][x];
  }

  function moveTractor () {
    const directs = [];
    if (tractor.x > 0) {
      directs.push('left');
    }

    if (tractor.x > columnsNumber - 2) {
      directs.push('right');
    }

    if (tractor.y > 0) {
      directs.push('up');
    }

    if (tractor.y > rowsNumber - 2) {
      directs.push('down');
    }

    const direct = getRandomFrom(directs);

    switch (direct) {
    case 'left':
      if (getField(tractor.x - 2, tractor.y) === '#') {
        setField(tractor.x - 1, tractor.y, '+');
        setField(tractor.x - 2, tractor.y, '+');
      }
      tractor.x -= 2;
      break;
    case 'right':
      if (getField(tractor.x + 2, tractor.y) === '#') {
        setField(tractor.x + 1, tractor.y, '+');
        setField(tractor.x + 2, tractor.y, '+');
      }
      tractor.x += 2;
      break;
    case 'up':
      if (getField(tractor.x, tractor.y - 2) === '#') {
        setField(tractor.x, tractor.y - 1, '+');
        setField(tractor.x, tractor.y - 2, '+');
      }
      tractor.y -= 2
      break;
    case 'down':
      if (getField(tractor.x, tractor.y + 2) === '#') {
        setField(tractor.x, tractor.y + 1, '+');
        setField(tractor.x, tractor.y + 2, '+');
      }
      tractor.y += 2;
      break;
    }
  }

}

module.exports = { 
  generateMaze 
}