 // helpers.js

// Function Expression for divide
const divide = function(a, b) {
    return a / b;
  };
  
  // Arrow function for square
  const square = (x) => x * x;
  
  // Arrow function for add
  const add = (a, b) => a + b;
  
  // Export the functions
  module.exports = {
    divide,
    square,
    add
  };
  