module.exports = {
  preset: [
    require('cssnano-preset-default'),
    {
      cssDeclarationSorter: false,
      convertValues: false,
      mergeIdents: false,
      mergeRules: false,
      minifyGradients: false,
      normalizeTimingFunctions: false,
      normalizeWhitespace: false,
      svgo: false,
      uniqueSelectors: false,
    },
  ],
};
