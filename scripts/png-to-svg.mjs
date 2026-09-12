import { writeFile } from "node:fs/promises";
import { trace } from "potrace";

trace(
  "public/img/home/hero-bg.png",
  {
    threshold: 180,
    color: "#042cfc",
    background: "transparent",
  },
  (err, svg) => {
    if (err) throw err;
    writeFile("public/img/home/hero-bg.svg", svg);
  },
);
