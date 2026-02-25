function reverseString(string) {
  let reverse = "";
  let stringIndex = string.length - 1;
  while (stringIndex >= 0) {
    reverse += string[stringIndex--];
  }
  return reverse;
}

console.log(reverseString("maxcode.dev")); // "ved.edocxam"
