import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import progress from './components/progress';
import picture from './components/picture';

const init = () => {
  eat.eatQuadPrinter();
  play.playQuadPrinter();
  fight.fightQuadPrinter();
  sleep.sleepQuadPrinter();
  progress.progressPrinter();
  picture.pictureFormPrinter();
};

init();
