import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _player2: Fighter;
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player2.attack(this.player);
      this.player.attack(this._player2);
      console.log(this._player2.lifePoints);
      console.log(this.player.lifePoints);
      if (this._player2.lifePoints === -1 || this.player.lifePoints === -1) {
        break; 
      }
    }
    return super.fight();
  }
}

// const newPVP = new PVP(new Character('player1'), new Character('player2'));
// console.log(newPVP);