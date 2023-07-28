import { nodeResolve } from "@rollup/plugin-node-resolve";
import copy from 'rollup-plugin-copy';

export default [
  // Configuration for DevToolsPlugin.js
  {
    input: "src/DevToolsPlugin.js",
    output: {
      file: "build/DevToolsPlugin.js",
      format: "es",
    },
    plugins: [
      nodeResolve({
        resolveOnly: ["@owloops/chrome-recorder", "@puppeteer/replay"],
      }),
      copy({
        targets: [{ src: "src/owloops.svg", dest: "build" }],
      }),
    ],
  },
  // Configuration for Replay.js
  {
    input: "src/Replay.js",
    output: {
      file: "build/Replay.js",
      format: "es",
      name: "Replay",
    },
    plugins: [
      nodeResolve({
        resolveOnly: ["@owloops/chrome-recorder", "@puppeteer/replay"],
      }),
    ],
  },
];
