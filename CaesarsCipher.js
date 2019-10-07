function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function rot13(str) {
  // LBH QVQ VG!
  let numberMapping = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
    8: "I",
    9: "J",
    10: "K",
    11: "L",
    12: "M",
    13: "N",
    14: "O",
    15: "P",
    16: "Q",
    17: "R",
    18: "S",
    19: "T",
    20: "U",
    21: "V",
    22: "W",
    23: "X",
    24: "Y",
    25: "Z"
  };

  let regex = /\w/;
  let newChar = [];
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      //console.log(str[i]);
      let position = parseInt(getKeyByValue(numberMapping, str[i]));
      //console.log(typeof position);
      //console.log("position" + position);
      position = (position + 13) % 26;
      //console.log("new pos" + position);
      //console.log("new value" + numberMapping[position]);
      newChar.push(numberMapping[position]);
    } else {
      newChar.push(str[i]);
    }
  }

  let result = newChar.reduce((accumulator, char) => accumulator + char, "");
  // console.log(result);
  return result;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
