function palindrome(str) {
  // Removing Special Characters
  let specialRegex = /[a-z0-9]/i;
  let cleanStr = []; // clean string

  for (let i = 0; i < str.length; i++) {
    if (specialRegex.test(str[i])) {
      cleanStr.push(str[i].toLowerCase());
    }
  }

  let charList = [...cleanStr];
  charList = charList.reverse();

  for (let i = 0; i < cleanStr.length; i++) {
    if (charList[i] != cleanStr[i]) {
      return false;
    }
  }
  return true;
}
