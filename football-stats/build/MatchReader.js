"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(daataReader) {
        this.daataReader = daataReader;
        this.matches = [];
    }
    load() {
        this.daataReader.read();
        this.matches = this.daataReader.data.map((dataRowString) => [
            (0, utils_1.dateStringToDate)(dataRowString[0]),
            dataRowString[1],
            dataRowString[2],
            parseInt(dataRowString[3]),
            parseInt(dataRowString[4]),
            dataRowString[5],
            dataRowString[6],
        ]);
    }
}
exports.MatchReader = MatchReader;
