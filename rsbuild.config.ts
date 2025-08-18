import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: { wasm: './lib/wasm.ts' }
  },
  output: {
    distPath: { root: 'rsbuild-dist' }
  }
});
