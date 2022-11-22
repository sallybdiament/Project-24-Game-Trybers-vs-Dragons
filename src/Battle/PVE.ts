import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player2: Array< Monster | SimpleFighter>;
  constructor(player: Fighter, player2: Array<Monster | SimpleFighter>) {
    super(player);
    this._player2 = player2;
  }

  functionWhile(i: number) {
    while (this.player.lifePoints > 0) {
      this._player2[i].attack(this.player);
      this.player.attack(this._player2[i]);
      if (this._player2[i].lifePoints === -1) break;
    }
  }
  
  fight(): number {
    for (let i = 0; i < this._player2.length; i += 1) {
      this.functionWhile(i);
    }   
    return super.fight();
  }
}
