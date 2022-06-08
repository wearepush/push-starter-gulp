module.exports = {
  preset: [
    require('cssnano-preset-default'),
    {
      cssDeclarationSorter: false,
      convertValues: false,
      mergeLonghand: false,
      mergeRules: false,
      minifyGradients: false,
      normalizePositions: false,
      normalizeRepeatStyle: false,
      normalizeTimingFunctions: false,
      normalizeUrl: false,
      normalizeWhitespace: false,
      preferredQuote: 'single',
      svgo: false,
      uniqueSelectors: false,
    },
  ],
};
