function abbrevName(name) {
  let initials = "";
  console.log(name);
  let split = name.split(' ');
  console.log(split);
  for (let text of split) {
    console.log(text);
    initials += (text[0] + ".");
  }
  return initials;
}

console.log(abbrevName("Natalie Portman"))