import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _playe2: Array< Monster | SimpleFighter>;
  constructor(player: Fighter, player2: Array<Monster | SimpleFighter>) {
    super(player);
    this._playe2 = player2;
  }
  
  fight(): number {
    for (let i = 0; i < this._playe2.length; i += 1) {
      while (this.player.lifePoints > 0 && this._playe2[i].lifePoints > 0) {
        this._playe2[i].attack(this.player);
        this.player.attack(this._playe2[i]);
        console.log(this._playe2[i].lifePoints);
        console.log(this.player.lifePoints);
      }
    }   
    return super.fight();
  }
}
