import Race from './Race';

class Halfling extends Race {
  private _points = 60;
  constructor(name: string, dexterity: number, points: number) {
    super(name, dexterity);
    this._points = points;
    this.maxLifePoints();
  }

  maxLifePoints(): number {
    return this._points;
  }

  createdRacesInstances(){
    
  }
}

export default Halfling;