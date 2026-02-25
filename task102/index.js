function maskify(cc) {
  let noSecret = cc.length - 4;
  let secret = "";
  for (let symbIndx in cc) {
    let symb;
    if (symbIndx < noSecret) {
      symb = "#";
    } else {
      symb = cc[symbIndx];
    }
    secret += symb;
  }
  return secret;
}

console.log(maskify("1234567890"));