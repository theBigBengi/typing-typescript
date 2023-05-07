import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./../MatchResult";
import { dateStringToDate } from "./../utils";

type MatchRow = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchRow> {
  mapRow(dataRowString: string[]): MatchRow {
    return [
      dateStringToDate(dataRowString[0]),
      dataRowString[1],
      dataRowString[2],
      parseInt(dataRowString[3]),
      parseInt(dataRowString[4]),
      dataRowString[5] as MatchResult,
      dataRowString[6],
    ];
  }
}
