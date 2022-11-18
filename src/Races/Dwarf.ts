import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf.count;
  }
}

export default Dwarf;