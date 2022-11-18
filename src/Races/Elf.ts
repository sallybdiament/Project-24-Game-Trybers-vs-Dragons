import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.count;
  }
}

export default Elf;

// const playerElf = new Elf('joao', 10);
// console.log(playerElf.maxLifePoints);