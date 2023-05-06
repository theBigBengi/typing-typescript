"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const data = fs_1.default
    .readFileSync("football.csv", { encoding: "utf-8" })
    .split("\n")
    .map((match) => match.split(","));
console.log(data);
