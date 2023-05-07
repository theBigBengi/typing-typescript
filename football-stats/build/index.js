"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const HtmlTarget_1 = require("./targets/HtmlTarget");
const WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
/* COMPOSITION */
// Create an object that satisfies the 'DataReader' interface
const fileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(fileReader);
matchReader.load();
// Initiate with static method on Summary
const summary = Summary_1.Summary.winsWithConsole("Man United");
summary.buildAndPrintReport(matchReader.matches);
// Initiate from constructor
const summaryFromConstructor = new Summary_1.Summary(new WinsAnalyzer_1.WinsAnalyzer("Man United"), new HtmlTarget_1.HtmlTarget("report.html"));
summaryFromConstructor.buildAndPrintReport(matchReader.matches);
