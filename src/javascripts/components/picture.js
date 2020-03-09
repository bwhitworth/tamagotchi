import utils from '../helpers/utils';
import data from '../helpers/data';

const photoPrinter = () => {
  let domString = '';
  const imageUrl = $('#petURL').val();
  data.setStat('petUrl', imageUrl);
  domString += `<img src="${data.getStat('petUrl')}">`;
  utils.printToDom('pet', domString);
};

const pictureFormPrinter = () => {
  let domString = '';
  domString += '<form>';
  domString += '<label for="picURL">Pet Photo URL:</label><br>';
  domString += '<input type="text" id="petURL"><br>';
  domString += '<button id="submit-photo">Submit</button>';
  domString += '</form>';
  utils.printToDom('pet', domString);
  $('#submit-photo').click(photoPrinter);
};

export default { pictureFormPrinter };
