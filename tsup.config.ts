import { defineConfig } from "tsup"

export default defineConfig([{
  entry: ["src/index.tsx"],
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
    options.minify = true
    options.loader = {
      '.js': 'jsx',
      '.ts': 'tsx',
      '.tsx': 'tsx',
    }
  }
},
{
  entry: ["src/index.tsx"],
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
