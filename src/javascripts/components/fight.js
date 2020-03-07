import utils from '../helpers/utils';
import data from '../helpers/data';

const fightQuadPrinter = () => {
  let domString = '';
  domString += '<h2>FIGHT</h2>';
  domString += '<div id="fight-score-container"></div>';
  domString += '<button id="run-away-btn">Run Away</button>';
  domString += '<button id="be-violent-btn">Be Violent</button>';

  utils.printToDom('fight', domString);
  data.scorePrinter('fight-score-container', data.pet.strength);
  $('#run-away-btn').click(data.runAway);
  $('#be-violent-btn').click(data.beViolent);
};

export default { fightQuadPrinter };
