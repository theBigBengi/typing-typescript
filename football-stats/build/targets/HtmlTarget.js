"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlTarget = void 0;
const fs_1 = require("fs");
class HtmlTarget {
    constructor(filename) {
        this.filename = filename;
    }
    print(report) {
        const html = `
        <div>
            <h1>Analysis</h1>
            <p>${report}</p>
        </div>
        `;
        (0, fs_1.writeFileSync)(this.filename || "report.html", html);
    }
}
exports.HtmlTarget = HtmlTarget;
