// const stats = (function() {
//   const sum = (x, y) => x + y;
//   const square = x => x * x;

//   function mean(data) {
//     return data.reduce(sum)/data.length;
//   }
  
//   function stddev(data) {
//     let m = mean(data);
//     return Math.sqrt(
//       data.map(x => x - m).map(square).reduce(sum)/(data.length-1)
//     );
//   }
//   return {mean, stddev};
// }());


// console.log(stats.mean([1,3,5,7,9]));
// console.log(stats.stddev([1,3,5,7,9]));


const modules = {};
function require(moduleName) { return modules[moduleName]; }

modules["stats.js"] = (function() {
  const exports = {};

  const sum = (x, y) => x + y;
  const square = x => x * x;

  exports.mean = function (data) {
    return data.reduce(sum)/data.length;
  }
  
  exports.stddev = function (data) {
    let m = exports.mean(data);
    return Math.sqrt(
      data.map(x => x - m).map(square).reduce(sum)/(data.length-1)
    );
  }

  return exports;
}());

const stats = require("stats.js");

console.log(stats.mean([1,3,5,7,9]));
console.log(stats.stddev([1,3,5,7,9]));

// 以上是对犀牛书的10.01 部分闭包内容的工作原理的简单介绍

