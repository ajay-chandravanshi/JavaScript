function sum(x, y) {
  s = x + y;
  console.log(x)
  return s
}
val = sum(5, 9);
console.log(val);
// below line create an error because x is a block scope variable x declare in function block

// console.log(x);
