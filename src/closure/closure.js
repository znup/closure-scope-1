function greeting() {
  let username = 'Adan';

  function displayUserName() {
    return `Hi ${username}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

function mosaico() {
  const figure = [];

  function pintar(newFigure) {
    figure.push(newFigure);

    let res = '';
    const mainLength = figure.length * 2;

    for (let row = 0; row < mainLength; row++) {
      for (let column = 0; column < mainLength; column++) {
        const valorMax = row > column ? row : column;
        const valorMin = row < column ? row : column;
        const valorPosible = mainLength - (valorMax + 1);
        const indexFigura = valorPosible < valorMin ? valorPosible : valorMin;

        res += `${figure[indexFigura]} `;
      }
      res += '\n';
    }
    return res;
  }

  return pintar;
}

const m = mosaico();
console.log(m('*'));
console.log(m('o'));
console.log(m('+'));
console.log(m('x'));
console.log(m('='));
