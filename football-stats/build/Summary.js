"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
const ConsoleTarget_1 = require("./targets/ConsoleTarget");
class Summary {
    constructor(analyzer, target) {
        this.analyzer = analyzer;
        this.target = target;
    }
    static winsWithConsole(team) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(team), new ConsoleTarget_1.ConsoleTarget());
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.analyize(matches);
        this.target.print(report);
    }
}
exports.Summary = Summary;
