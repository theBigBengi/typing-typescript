"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("../CsvFileReader");
/* INHERITANCE */
const data = new CsvFileReader_1.CsvFileReader("football.csv");
data.read();
console.log(data.data);
