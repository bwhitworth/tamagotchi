import utils from '../helpers/utils';
import data from '../helpers/data';

const sleepQuadPrinter = () => {
  let domString = '';
  domString += '<h2>SLEEP</h2>';
  domString += '<div id="sleep-score-container"></div>';
  domString += '<button id="cat-nap-btn">Cat Nap</button>';
  domString += '<button id="deep-slumber-btn">Deep Slumber</button>';

  utils.printToDom('sleep', domString);
  data.scorePrinter('sleep-score-container', data.pet.energy);
  $('#cat-nap-btn').click(data.catNap);
  $('#deep-slumber-btn').click(data.deepSlumber);
};

export default { sleepQuadPrinter };
