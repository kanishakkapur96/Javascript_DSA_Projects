function maxMultiple(change, unit) {
  let multiple = 1;
  while (unit * multiple <= change) {
    multiple++;
  }

  return multiple - 1;
}

function checkCashRegister(price, cash, cid) {
  let unitAmount = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0
  };
  var change;
  let numberOfCurrency = {};
  let totalCash = 0.0;
  for (let i = 0; i < cid.length; i++) {
    //console.log("amount:" + cid[i][1]);
    //console.log(unitAmount[cid[i][0]]);
    numberOfCurrency[cid[i][0]] = (cid[i][1] / unitAmount[cid[i][0]]).toFixed(
      2
    );
    totalCash = (parseFloat(totalCash) + cid[i][1]).toFixed(2);
    //console.log("totalCash:" + totalCash);
  }

  //console.log(numberOfCurrency);
  //console.log(totalCash);
  let changeReturn = parseFloat((cash - price).toFixed(2));

  if (changeReturn > totalCash) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeReturn == totalCash) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeCurr = [];
    let v = cid.length - 1;
    //console.log("while Starts");
    while (changeReturn != 0.0 && v >= 0) {
      //console.log("4", changeReturn);
      if (changeReturn - unitAmount[cid[v][0]] < 0.0) {
        //console.log("3", changeReturn);
        v--;
      } else {
        if (changeReturn >= cid[v][1]) {
          //console.log(typeof changeReturn);
          changeReturn = (changeReturn - cid[v][1]).toFixed(2);
          changeCurr.push([cid[v][0], cid[v][1]]);
          //console.log("1", changeReturn);
        } else {
          let X = maxMultiple(changeReturn, unitAmount[cid[v][0]]);
          if (X <= numberOfCurrency[cid[v][0]]) {
            changeReturn = (changeReturn - unitAmount[cid[v][0]] * X).toFixed(
              2
            );
            changeCurr.push([cid[v][0], unitAmount[cid[v][0]] * X]);
          }
          //console.log("2", changeReturn);
        }
        v--;
      }
    }

    if (v < 0 && changeReturn != 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    //console.log(changeCurr);

    return { status: "OPEN", change: changeCurr };
  }
}

/*checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);*/

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
); /*
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);*/
