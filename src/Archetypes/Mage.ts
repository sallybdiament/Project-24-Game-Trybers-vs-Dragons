import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static count = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }
}

export default Mage;