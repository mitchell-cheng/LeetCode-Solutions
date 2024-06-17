const spiralOrder = function(matrix: number[][]): number[] {
  const [rows, cols]: [number, number] = [matrix.length - 1, matrix[0].length - 1];
  let [top, bot, left, right]: [number, number, number, number] = [0, rows, 0, cols];
  const result: number[] = [];

  while (top <= bot && left <= right) {
    addTop(top, bot, left, right, result, matrix);
    top++;
    addRight(top, bot, left, right, result, matrix);
    right--;

    if (top <= bot) {
      addBot(top, bot, left, right, result, matrix);
      bot--;
    }

    if (left <= right) {
      addLeft(top, bot, left, right, result, matrix);
      left++;
    }
  }

  return result;
};

const addTop = (top: number, bot: number, left: number, right: number, result: number[], matrix: number[][]): void => {
  for (let col = left; col <= right; col++) {
    result.push(matrix[top][col]);
  }
}

const addRight = (top: number, bot: number, left: number, right: number, result: number[], matrix: number[][]): void => {
  for (let row = top; row <= bot; row++) {
    result.push(matrix[row][right]);
  } 
}

const addBot = (top: number, bot: number, left: number, right: number, result: number[], matrix: number[][]): void => {
  for (let col = right; col >= left; col--) {
    result.push(matrix[bot][col]);
  }
}

const addLeft = (top: number, bot: number, left: number, right: number, result: number[], matrix: number[][]): void => {
  for (let row = bot; row >= top; row--) {
    result.push(matrix[row][left]);
  }
};