import { CsvFileReader } from "../CsvFileReader";
import { MatchReader } from "./MatchReader";

/* INHERITANCE */

const data = new CsvFileReader("football.csv");
data.read();
console.log(data.data);
