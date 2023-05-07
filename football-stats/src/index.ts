import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { HtmlTarget } from "./targets/HtmlTarget";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";

/* COMPOSITION */

// Create an object that satisfies the 'DataReader' interface
const fileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(fileReader);
matchReader.load();

// Initiate with static method on Summary
const summary = Summary.winsWithConsole("Man United");
summary.buildAndPrintReport(matchReader.matches);

// Initiate from constructor
const summaryFromConstructor = new Summary(
  new WinsAnalyzer("Man United"),
  new HtmlTarget("report.html")
);

summaryFromConstructor.buildAndPrintReport(matchReader.matches);
