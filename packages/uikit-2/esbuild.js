// import linaria from '@linaria/esbuild';
// import esbuild from 'esbuild';
const linaria = require('@linaria/esbuild')
const esbuild = require('esbuild')
const prod = process.env.NODE_ENV === 'production'
const glob = require('glob')

// esbuild
//   .build({
//     entryPoints: ['src/index.ts'],
//     outdir: 'dist/esm',
//     bundle: true,
//     minify: prod,
//     external: ['@binance/mp-service', '@binance/mp-components', '@tarojs/components', 'react', 'react-dom', '@pancakeswap/mp-styled-2', '@tarojs/react', '@tarojs/taro'],
//     format: "esm",
//     plugins: [
//       linaria.default({
//         sourceMap: prod,
//       }),
//     ],
//   })
//   .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist/lib',
    bundle: true,
    minify: prod,
    external: [
      '@binance/mp-service',
      '@binance/mp-components',
      '@tarojs/components',
      'react',
      'react-dom',
      '@pancakeswap/mp-styled-2',
      '@tarojs/react',
      '@tarojs/taro',
    ],
    format: 'cjs',
    plugins: [
      linaria.default({
        sourceMap: prod,
      }),
    ],
  })
  .catch(() => process.exit(1))
