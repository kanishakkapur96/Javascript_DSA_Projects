function closestBase(num) {
  if (num == 0) {
    return "";
  } else if (num >= 1 && num <= 3) {
    return "I".concat("I".repeat(num - 1));
  } else if (num == 4) {
    return "IV";
  } else if (num >= 5 && num <= 8) {
    return "V".concat("I".repeat(num - 5));
  } else if (num == 9) {
    return "IX";
  } else if (num >= 10 && num <= 30) {
    return "X".concat("X".repeat((num - 10) / 10));
  } else if (num == 40) {
    return "XL";
  } else if (num >= 50 && num <= 80) {
    return "L".concat("X".repeat((num - 50) / 10));
  } else if (num == 90) {
    return "XC";
  } else if (num >= 100 && num <= 300) {
    return "C".concat("C".repeat((num - 100) / 100));
  } else if (num == 400) {
    return "CD";
  } else if (num >= 500 && num <= 800) {
    return "D".concat("C".repeat((num - 500) / 100));
  } else if (num == 900) {
    return "CM";
  } else if (num >= 1000 && num <= 3000) {
    return "M".concat("M".repeat((num - 1000) / 1000));
  }
}
function convertToRoman(num) {
  let parts = [];
  let romanNumeral = [];
  let numStr = num.toString();

  let numberArg = num;
  for (let i = numStr.length - 1; i >= 0; i--) {
    parts.push(Math.floor(numberArg / Math.pow(10, i)) * Math.pow(10, i));
    numberArg =
      numberArg - Math.floor(numberArg / Math.pow(10, i)) * Math.pow(10, i);
  }

  for (let i = 0; i < parts.length; i++) {
    romanNumeral.push(closestBase(parts[i]));
  }

  var result = romanNumeral.reduce((accumulator, num) => accumulator + num, "");
  //console.log(result);
  return result;
}
