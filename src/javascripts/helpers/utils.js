const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};

const scorePrinter = (quadDiv, scoreToPrint) => {
  $(`#${quadDiv}`).html(`<h2>${scoreToPrint}</h2>`);
};

const statAdd = (scoreType, addAmount) => {
  if ((scoreType + addAmount) <= 100) { scoreType += addAmount; } else { scoreType = 100; }
};

const statSubtract = (scoreType, subAmount) => {
  if ((scoreType - subAmount) >= 0) { scoreType -= subAmount; } else { scoreType = 100; }
};

export default {
  printToDom, scorePrinter, statAdd, statSubtract,
};
