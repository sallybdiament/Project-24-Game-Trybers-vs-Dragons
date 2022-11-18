import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling.count;
  }
}

export default Halfling;