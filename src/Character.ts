import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

interface CharacterParams {
  race: Race, 
  archetype: Archetype, 
  maxLifePoints: number, 
  lifePoints: number, 
  strength: number, 
  defense: number, 
  dexterity: number, 
  energy: Energy, 
  name: string,
}
export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(params: CharacterParams) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(params.name, this._dexterity);
    this._archetype = new Mage(params.name);
    this._maxLifePoints = params.race.maxLifePoints / 2;
    this._lifePoints = params.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return this._energy; }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if (damage > 0) { this._lifePoints -= damage; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints; 
    }
    this._lifePoints = this._maxLifePoints;
  }
}

// const newCharacter = new Character({
//     name:'nome',
//     race: new Elf('nome', 10),
//     archetype: Mage,
//     maxLifePoints: 1,
//     lifePoints: 1,
//     strength: 1,
//     defense: 1,
//     dexterity: 1,
// })
