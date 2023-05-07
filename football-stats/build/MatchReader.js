"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(dataRowString) {
        return [
            (0, utils_1.dateStringToDate)(dataRowString[0]),
            dataRowString[1],
            dataRowString[2],
            parseInt(dataRowString[3]),
            parseInt(dataRowString[4]),
            dataRowString[5],
            dataRowString[6],
        ];
    }
}
exports.MatchReader = MatchReader;
