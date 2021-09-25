module.exports = {
  preset: [
    require('cssnano-preset-default'),
    {
      cssDeclarationSorter: false,
      convertValues: false,
      mergeRules: false,
      preferredQuote: 'single',
      normalizeUrl: false,
      uniqueSelectors: false,
      svgo: false,
    },
  ],
};
