import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';

const init = () => {
  eat.eatQuadPrinter();
  play.playQuadPrinter();
  fight.fightQuadPrinter();
};

init();
