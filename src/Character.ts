// import Archetype, { Mage } from './Archetypes';
// import Energy from './Energy';
// import Fighter from './Fighter';
// import Race, { Elf } from './Races';
// import getRandomInt from './utils';

// class Character implements Fighter {
//   private _race: Race;
//   private _archetype: Archetype;
//   private _maxLifePoints: number;
//   private _lifePoints: number;
//   private _strength: number;
//   private _defense: number;
//   private _dexterity: number;
//   private _energy: Energy;

//   constructor(
//     race: Race, 
//     archetype: Archetype, 
//     maxLifePoints: number, 
//     lifePoints: number, 
//     strength: number, 
//     defense: number, 
//     dexterity: number, 
//     energy: Energy, 
//     name: string,
//   ) {
//     this._dexterity = getRandomInt(1, 10);
//     this._race = new Elf(name, this._dexterity);
//     this._archetype = new Mage(name);
//     this._maxLifePoints = this._race.maxLifePoints / 2;
//     this._lifePoints = this._maxLifePoints;
//     this._strength = getRandomInt(1, 10);
//     this._defense = getRandomInt(1, 10);
//     // this._energy.amount = Math.random() * 10;
//   }
// }

// export default Character;