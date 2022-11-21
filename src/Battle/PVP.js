"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this._player2 = player2;
    }
    attack() {
        this._player2.attack(this.player);
    }
    fight() {
        for (let i = 0; this._player2.lifePoints > 0 && this.player.lifePoints > 0; i += 1) {
            this.attack();
        }
        return this._player2.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVP;
// const newPVP = new PVP(new Character('player1'), new Character('player2'));
