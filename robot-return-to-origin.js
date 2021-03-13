var judgeCircle = function(moves) {
  class Robot {
      constructor(x=0, y=0) {
          this.x = x;
          this.y = y;
      }

      move(direction) {
          switch(direction) {
              case 'U':
                  this.y++;
                  break;
              case 'D':
                  this.y--;
                  break;
              case 'L':
                  this.x--;
                  break;
              case 'R':
                  this.x++;
                  break;
          }
      }

      isInOrigin() {
          return this.x === 0 && this.y === 0;
      }
  }

  let robot = new Robot();
  for (move of moves) {
      robot.move(move);
  }

  return robot.isInOrigin();
};

var judgeCircle = function(moves) {
  let moveHorizontal = 0;
  let moveVertical = 0;

  for (let i = 0; i < moves.length; i++) {
      if (moves[i] === 'U') {
          moveVertical++;
      } else if (moves[i] === 'D') {
          moveVertical--;
      } else if (moves[i] === 'L') {
          moveHorizontal--;
      } else if (moves[i] === 'R') {
          moveHorizontal++;
      }
  }

  return moveHorizontal === 0 && moveVertical === 0;
}
