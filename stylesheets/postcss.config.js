module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-simple-vars')(),
    require('autoprefixer')({
      browsers: [ 'last 2 versions' ]
    }),
    require('cssnano'),
  ],
};
