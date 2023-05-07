import { OutputTarget } from "../Summary";
import { writeFileSync } from "fs";

export class HtmlTarget implements OutputTarget {
  constructor(public filename?: string) {}

  print(report: string): void {
    const html = `
        <div>
            <h1>Analysis</h1>
            <p>${report}</p>
        </div>
        `;

    writeFileSync(this.filename || "report.html", html);
  }
}
