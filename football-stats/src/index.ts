import { MatchReader } from "./MatchReader";

/* INHERITANCE */

const data = new MatchReader("football.csv");
data.read();
console.log(data.data);
