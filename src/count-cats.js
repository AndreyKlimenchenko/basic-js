const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const array = matrix.flat();
  let count = 0;
  array.forEach(item => {
    if(item === "^^"){
      return count = count + 1;
    }
  });
  return count;
};
