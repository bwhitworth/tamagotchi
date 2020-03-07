import utils from '../helpers/utils';
import data from '../helpers/data';

const eatQuadPrinter = () => {
  let domString = '';
  domString += '<h2>EAT</h2>';
  domString += '<div id="eat-score-container"></div>';
  domString += '<button id="healthy-food-btn">Healthy Food</button>';
  domString += '<button id="junk-food-btn">Junk Food</button>';

  utils.printToDom('eat', domString);
  data.scorePrinter('eat-score-container', data.pet.full);
  $('#healthy-food-btn').click(data.feedHealthyFood);
  $('#junk-food-btn').click(data.feedJunkFood);
};

export default { eatQuadPrinter };
