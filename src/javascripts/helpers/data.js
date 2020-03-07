const pet = {
  full: 100,
  fun: 50,
  strength: 100,
  energy: 50,
};

const scorePrinter = (quadDiv, scoreToPrint) => {
  $(`#${quadDiv}`).html(`<h3>${scoreToPrint}</h3>`);
};

const feedHealthyFood = () => {
  if (pet.full <= 90) { pet.full += 10; } else { pet.full = 100; }
  scorePrinter('eat-score-container', pet.full);
};

const feedJunkFood = () => {
  if (pet.full >= 3) { pet.full -= 3; } else { pet.full = 0; }
  scorePrinter('eat-score-container', pet.full);
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
  pet, feedHealthyFood, feedJunkFood, scorePrinter, superFunActivity, sortaFunActivity, runAway, beViolent, catNap, deepSlumber,
};
