import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _playe2: Array< Monster | SimpleFighter>;
  constructor(player: Fighter, player2: Array<Monster | SimpleFighter>) {
    super(player);
    this._playe2 = player2;
  }

  functionWhile(i: number) {
    while (this.player.lifePoints !== -1 && this._playe2[i].lifePoints !== -1) {
      this._playe2[i].attack(this.player);
      this.player.attack(this._playe2[i]);
      if (this._playe2[i].lifePoints === -1) break;
    }
  }
  
  fight(): number {
    for (let i = 0; i < this._playe2.length; i += 1) {
      this.functionWhile(i);
    }   
    return super.fight();
  }
}
