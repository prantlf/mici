const style = require('bacom/tools/style/esbuild')
const templ = require('bacom/tools/templ/esbuild')

module.exports = [
  {
    parallel: true,
    tasks: [
      {
        entryPoints: ['src/index.ts'],
        outfile: 'dist/index.js',
        format: 'esm', sourcemap: true, bundle: true,
        plugins: [style(), templ()]
      },
      {
        entryPoints: ['src/index.ts'],
        outfile: 'dist/index.min.js',
        format: 'esm', sourcemap: true, bundle: true, minify: true,
        plugins: [style({ minify: true }), templ({ minify: true })]
      },
      {
        entryPoints: ['src/components/[name]/[name].ts'],
        outfile: 'dist/[name].js',
        format: 'esm', sourcemap: true, bundle: true,
        plugins: [style(), templ()],
        external: ['bacom']
      }
    ]
  },
  [{
    entryPoints: ['src/components/[name]/[name].test.ts'],
    outfile: 'src/components/[name]/[name].test.js',
    format: 'cjs', sourcemap: true, bundle: true, platform: 'node',
    external: ['bacom', 'tehanu', '@prantlf/dom-lite']
  }]
]
