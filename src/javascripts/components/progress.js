import utils from '../helpers/utils';
import data from '../helpers/data';

const getProgress = () => {
  const fullScore = data.getStat('full');
  const playScore = data.getStat('fun');
  const strengthScore = data.getStat('strength');
  const energyScore = data.getStat('energy');
  return ((fullScore + playScore + strengthScore + energyScore) / 4).toFixed();
};

const progressPrinter = () => {
  const overallScore = getProgress();
  let domString = '';
  domString += '<h2>OVERALL HEALTH: </h2>';
  domString += `<progress value="${overallScore}" max="100">${overallScore}</progress>`;
  utils.printToDom('progress', domString);
};

export default { progressPrinter };
