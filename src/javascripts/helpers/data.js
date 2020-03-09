const pet = {
  full: 80,
  fun: 50,
  strength: 100,
  energy: 50,
};

const getStat = (stat) => {
  const keyValue = stat;
  return pet[keyValue];
};

const setStat = (stat, newValue) => {
  const keyValue = stat;
  pet[keyValue] = newValue;
};

const addStat = (stat, addValue) => {
  const keyValue = stat;
  pet[keyValue] += addValue;
};

const subStat = (stat, subValue) => {
  const keyValue = stat;
  pet[keyValue] -= subValue;
};

const scorePrinter = (quadDiv, scoreToPrint) => {
  $(`#${quadDiv}`).html(`<h3>${scoreToPrint}</h3>`);
};

const feedHealthyFood = () => {
  const fullScore = getStat('full');
  console.error('get:', fullScore);
  if (fullScore <= 90) { console.error(addStat('full', 10)); } else { console.error('is >90:', fullScore); setStat('full', 100); }
  scorePrinter('eat-score-container', fullScore);
  console.error(fullScore);
};

const feedJunkFood = () => {
  const fullScore = getStat('full');
  if (fullScore >= 3) { subStat('full', 3); } else { subStat('full', 0); }
  scorePrinter('eat-score-container', fullScore);
  console.error(fullScore);
};

const superFunActivity = () => {
  if (pet.fun <= 50) { pet.fun += 50; } else { pet.fun = 100; }
  scorePrinter('play-score-container', pet.fun);
};

const sortaFunActivity = () => {
  if (pet.fun <= 98) { pet.fun += 2; } else { pet.fun = 100; }
  scorePrinter('play-score-container', pet.fun);
};

const runAway = () => {
  if (pet.strength >= 1) { pet.strength -= 1; } else { pet.strength = 0; }
  scorePrinter('fight-score-container', pet.strength);
};

const beViolent = () => {
  if (pet.strength >= 10) { pet.strength -= 10; } else { pet.strength = 0; }
  scorePrinter('fight-score-container', pet.strength);
};

const catNap = () => {
  if (pet.energy <= 50) { pet.energy += 50; } else { pet.energy = 100; }
  scorePrinter('sleep-score-container', pet.energy);
};

const deepSlumber = () => {
  if (pet.energy <= 40) { pet.energy += 60; } else { pet.energy = 100; }
  scorePrinter('sleep-score-container', pet.energy);
};

export default {
  pet, getStat, feedHealthyFood, feedJunkFood, scorePrinter, superFunActivity, sortaFunActivity, runAway, beViolent, catNap, deepSlumber,
};
