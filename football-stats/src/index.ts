import fs from "fs";

const data = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((match: string): string[] => match.split(","));

console.log(data);
