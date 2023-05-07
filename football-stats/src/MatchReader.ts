import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

interface DataReader {
  read(): void;
  data: string[][];
}

type MatchRow = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
  matches: MatchRow[] = [];

  constructor(public daataReader: DataReader) {}

  load() {
    this.daataReader.read();
    this.matches = this.daataReader.data.map(
      (dataRowString: string[]): MatchRow => [
        dateStringToDate(dataRowString[0]),
        dataRowString[1],
        dataRowString[2],
        parseInt(dataRowString[3]),
        parseInt(dataRowString[4]),
        dataRowString[5] as MatchResult,
        dataRowString[6],
      ]
    );
  }
}
