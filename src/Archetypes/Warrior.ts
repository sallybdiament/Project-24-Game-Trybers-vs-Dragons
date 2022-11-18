import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static count = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }
}

export default Warrior;