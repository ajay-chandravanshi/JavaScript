// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function countVowels(str) {
  let i;
  let count = 0;
  for (i = 0; i <str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
val=countVowels("i love javascript");
console.log(val);
