// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;

//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(10);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(5);
myMoneyBox(20);

const monyBoxRouss = moneyBox();
monyBoxRouss(20);
monyBoxRouss(120);
monyBoxRouss(80);
