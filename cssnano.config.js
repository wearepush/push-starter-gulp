module.exports = {
  preset: [
    require('cssnano-preset-default'),
    {
      cssDeclarationSorter: false,
      convertValues: false,
      minifyGradients: false,
      normalizePositions: false,
      normalizeTimingFunctions: false,
      normalizeWhitespace: false,
      svgo: false,
      uniqueSelectors: false,
    },
  ],
};
