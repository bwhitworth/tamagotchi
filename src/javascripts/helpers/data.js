const pet = {
  full: 100,
  play: 50,
  strength: 100,
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
  if (pet.play <= 50) { pet.play += 50; } else { pet.play = 100; }
  scorePrinter('play-score-container', pet.play);
};

const sortaFunActivity = () => {
  if (pet.play <= 98) { pet.play += 2; } else { pet.play = 100; }
  scorePrinter('play-score-container', pet.play);
};

const runAway = () => {
  if (pet.strength >= 1) { pet.strength -= 1; } else { pet.strength = 0; }
  scorePrinter('fight-score-container', pet.strength);
};

const beViolent = () => {
  if (pet.strength >= 10) { pet.strength -= 10; } else { pet.strength = 0; }
  scorePrinter('fight-score-container', pet.strength);
};

export default {
  pet, feedHealthyFood, feedJunkFood, scorePrinter, superFunActivity, sortaFunActivity, runAway, beViolent,
};
