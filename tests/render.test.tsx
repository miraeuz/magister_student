import { mkdirSync, writeFileSync } from "node:fs";
import type { ComponentType } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { describe, expect, it } from "vitest";
import "../src/i18n";

const modules = import.meta.glob<{ default: ComponentType }>(["../src/pages/generated/*.tsx", "../src/pages/app/*.tsx", "../src/pages/auth/{Login,Register,Forgot,Reset}.tsx"], { eager: true });
const OUT = process.env.RENDER_OUT;

describe("every page renders", () => {
  for (const [path, mod] of Object.entries(modules)) {
    const name = path.split("/").pop()!.replace(".tsx", "");
    it(name, () => {
      const Page = mod.default;
      const html = renderToString(
        <StaticRouter location="/">
          <Page />
        </StaticRouter>,
      );
      expect(html.length).toBeGreaterThan(1000);
      if (OUT) {
        mkdirSync(OUT, { recursive: true });
        writeFileSync(`${OUT}/${name}.html`, html);
      }
    });
  }
});
