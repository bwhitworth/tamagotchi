import utils from '../helpers/utils';
import data from '../helpers/data';

const playQuadPrinter = () => {
  let domString = '';
  domString += '<h2>PLAY</h2>';
  domString += '<div id="play-score-container"></div>';
  domString += '<button id="super-fun-btn">Super Fun</button>';
  domString += '<button id="sorta-fun-btn">Sorta Fun</button>';

  utils.printToDom('play', domString);
  data.scorePrinter('play-score-container', data.pet.fun);
  $('#super-fun-btn').click(data.superFunActivity);
  $('#sorta-fun-btn').click(data.sortaFunActivity);
};

export default { playQuadPrinter };
