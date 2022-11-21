import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter) {
    super(player);
    super.fight();
  }
  //   fight(): number {
      
//   }
}