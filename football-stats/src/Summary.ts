import { MatchData } from "./MatchData";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { ConsoleTarget } from "./targets/ConsoleTarget";

export interface Analyzer {
  analyize(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public target: OutputTarget) {}

  static winsWithConsole(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new ConsoleTarget());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.analyize(matches);
    this.target.print(report);
  }
}
