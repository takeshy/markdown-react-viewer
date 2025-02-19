import { defineConfig } from "tsup"

export default defineConfig([{
  entry: ["src/markdown-viewer.tsx"],
  format: ["esm"],
  dts: false,
  tsconfig: "./tsconfig.tsup.json",
  minify: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  platform: "browser",
  outDir: "dist/",
  outExtension: () => ({ js: '.js' }),
  noExternal: [/.*/],
  injectStyle: true,
  esbuildOptions(options) {
    options.bundle = true
    options.loader = {
      '.js': 'jsx',
      '.ts': 'tsx',
      '.tsx': 'tsx',
    }
  }
},
{
  entry: ["src/viewer/index.tsx"],
  format: ["esm"],
  dts: true,
  outDir: "dist/",
  outExtension: () => ({ js: '.mjs' }),
  tsconfig: "./tsconfig.tsup.json",
  splitting: true,
  sourcemap: true,
  platform: "browser",
  injectStyle: true,
  external: ["react", "react-dom"],
}]
)
