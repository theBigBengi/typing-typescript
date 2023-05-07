"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    analyize(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} won ${wins} games`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
