function telephoneCheck(str) {
  //let regex = /^1?\s?(?\d{3})?\s?-?\d{3}-?\d{4}$/;

  let regex = /^1?\s?\(\d{3}\)-?\s?\d{3}-?\s?\d{4}$|^1?\s?\d{3}-?\s?\d{3}-?\s?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("(555-555-5555"));
