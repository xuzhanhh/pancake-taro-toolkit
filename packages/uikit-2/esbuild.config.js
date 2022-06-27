// import linaria from '@linaria/esbuild';
// import esbuild from 'esbuild';
const linaria = require('@linaria/esbuild')
const esbuild = require("esbuild")
const prod = process.env.NODE_ENV === 'production';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    minify: prod,
    external: ['@binance/mp-service', '@binance/mp-components', '@tarojs/components', 'react', 'react-dom'],
    format: "esm",
    plugins: [
      linaria.default({
        sourceMap: prod,
      }),
    ],
  })
  .catch(() => process.exit(1));
