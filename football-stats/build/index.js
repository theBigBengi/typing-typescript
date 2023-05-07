"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
/* INHERITANCE */
const data = new MatchReader_1.MatchReader("football.csv");
data.read();
console.log(data.data);
