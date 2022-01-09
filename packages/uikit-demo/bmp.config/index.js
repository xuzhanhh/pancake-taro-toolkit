module.exports = {
  alias: {},

  entry: {
    app: ['src/app'],
  },
  copy: {
    patterns: [
      { from: 'src/asset/', to: '.bmp/build/asset/', ignore: ['*.js'] }, // Specify the directory to be copied
    ],
  },
  defineConstants: {},
}
