import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: Monster[];
  constructor(player: Fighter, monsters: Monster[]) {
    super(player);
    this._monsters = monsters;
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  fight(): number {
    for (let i = 0; i < this._monsters.length; i += 1) {
      while (this.player.lifePoints > 0) {
        this._monsters[i].attack(this.player);
        this.player.attack(this._monsters[i]);
        if (this._monsters[i].lifePoints === -1) break;
      }
    }
    return super.fight();
  }
}