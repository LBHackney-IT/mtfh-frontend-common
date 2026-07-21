#!/usr/bin/env node
/**
 * Ensure package build/ exists for git/npm consumers.
 * Prefer committed artifacts; only compile when they are missing.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const marker = path.join(__dirname, "..", "build", "http", "index.d.ts");

if (fs.existsSync(marker)) {
  process.exit(0);
}

const tsc = path.join(
  __dirname,
  "..",
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsc.cmd" : "tsc",
);

const result = spawnSync(tsc, ["-p", "tsconfig.build.json"], {
  stdio: "inherit",
  cwd: path.join(__dirname, ".."),
  shell: process.platform === "win32",
});

process.exit(result.status === null ? 1 : result.status);
