const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

const divide =function divide(a, b){
  let X=0;
  if(b==0){
    X=1;
  }else if (b!=0){
    X=a/b;
  }
  return X;
  
}

const multiply =function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide:divide, multiply:multiply};