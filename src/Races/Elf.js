"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf.count += 1;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        return Elf.count;
    }
}
Elf.count = 0;
exports.default = Elf;
// const playerElf = new Elf('joao', 10);
// console.log(playerElf.maxLifePoints);
