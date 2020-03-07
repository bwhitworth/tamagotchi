const pet = {
  full: 100,
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

export default {
  pet, feedHealthyFood, feedJunkFood, scorePrinter,
};
