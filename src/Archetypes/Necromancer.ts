import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static count = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }
}

export default Necromancer;