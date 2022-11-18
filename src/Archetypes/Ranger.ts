import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static count = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }
}

export default Ranger;