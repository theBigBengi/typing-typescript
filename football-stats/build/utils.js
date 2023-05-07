"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
function dateStringToDate(dateString) {
    const dateParts = dateString
        .split("/")
        .map((dp) => parseInt(dp));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
exports.dateStringToDate = dateStringToDate;
