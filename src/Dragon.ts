import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super(Monster);
    this.lifePoints = 999;
  }
}