import utils from '../helpers/utils';
import data from '../helpers/data';

const feedHealthyFood = () => {
  const fullScore = data.getStat('full');
  console.error('get:', fullScore);
  if (fullScore <= 90) { console.error(data.addStat('full', 10)); } else { console.error('is >90:', fullScore); data.setStat('full', 100); }
  data.scorePrinter('eat-score-container', fullScore);
  console.error('final:', fullScore);
};

const feedJunkFood = () => {
  const fullScore = data.getStat('full');
  if (fullScore >= 3) { data.subStat('full', 3); } else { data.subStat('full', 0); }
  data.scorePrinter('eat-score-container', fullScore);
  console.error(fullScore);
};

const eatQuadPrinter = () => {
  let domString = '';
  domString += '<h2>EAT</h2>';
  domString += '<div id="eat-score-container"></div>';
  domString += '<button id="healthy-food-btn">Healthy Food</button>';
  domString += '<button id="junk-food-btn">Junk Food</button>';

  utils.printToDom('eat', domString);
  data.scorePrinter('eat-score-container', data.pet.full);
  $('#healthy-food-btn').click(feedHealthyFood);
  $('#junk-food-btn').click(feedJunkFood);
};

export default { eatQuadPrinter };
