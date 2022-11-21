import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  attack() {
    this._player2.attack(this.player);
  }

  fight(): number {
    for (
      let i = 0; 
      this._player2.lifePoints > 0 && this.player.lifePoints > 0; 
      i += 1) {
      this.attack();
    }
    return this._player2.lifePoints === -1 ? -1 : 1;
  }
}

// const newPVP = new PVP(new Character('player1'), new Character('player2'));